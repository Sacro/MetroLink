import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Interval, NestSchedule } from 'nest-schedule';
import { Repository } from 'typeorm';
import { MetrolinkResponse } from './entities';
import { MetrolinkReceiverService } from './metrolink-receiver.service';
import { PubSubService } from 'app/pubsub/pubsub.service';

@Injectable()
export class MetrolinkHandlerService extends NestSchedule {
  constructor(
    private readonly pubsubService: PubSubService,
    private readonly receiverService: MetrolinkReceiverService,
    @InjectRepository(MetrolinkResponse)
    private readonly repository: Repository<MetrolinkResponse>,
  ) {
    super();
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
      this.repository
        .save(response)
        .then(result => {
          this.pubsubService.pubsub.publish('updatedResponse', result);
        })
        .catch(reason => {
          Logger.error(reason);
        });
    }
  }
}
