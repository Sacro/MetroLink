import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEqual } from 'lodash';
import { Interval, NestSchedule } from 'nest-schedule';
import { Repository } from 'typeorm';

import { PubSubService } from '../app/pubsub/pubsub.service';
import { MetrolinkResponse } from './entities';
import { MetrolinkReceiverService } from './metrolink-receiver.service';

@Injectable()
export class MetrolinkHandlerService extends NestSchedule {
  previousResponses: MetrolinkResponse[] = [];

  constructor(
    private readonly pubsubService: PubSubService,
    private readonly receiverService: MetrolinkReceiverService,
    @InjectRepository(MetrolinkResponse)
    private readonly repository: Repository<MetrolinkResponse>,
  ) {
    super();

    this.receiverService.receive().then(result =>
      result.subscribe(responses =>
        responses.forEach(response => {
          this.updateResponse(response);
        }),
      ),
    );
  }

  @Interval(10_000)
  async getLatestData() {
    Logger.log('requesting...');
    this.receiverService
      .receive()
      .then(result => result.subscribe(data => this.processData(data)));
  }

  async processData(responses: MetrolinkResponse[]) {
    for (const response of responses) {
      if (!isEqual(response, this.previousResponses[response.Id])) {
        this.updateResponse(response);
      }
    }
  }

  async updateResponse(response: MetrolinkResponse) {
    this.repository
      .save(response)
      .then(result => {
        this.pubsubService.pubsub.publish('updatedResponse', result);
        this.previousResponses[response.Id] = response;
      })
      .catch(reason => {
        Logger.error(reason);
      });
  }
}
