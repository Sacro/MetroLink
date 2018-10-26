import { Injectable, Logger } from '@nestjs/common';
import { Interval, NestSchedule } from 'nest-schedule';
import { MetrolinkResponse } from './entities';
import { MetrolinkReceiverService } from './metrolink-receiver.service';

@Injectable()
export class ScheduleService extends NestSchedule {
  constructor(private readonly receiverService: MetrolinkReceiverService) {
    super();
  }

  @Interval(10_000)
  async getLatestData() {
    Logger.log('requesting...');
    const response = await this.receiverService
      .receive()
      .then(result => result.subscribe(data => this.processData(data)));
  }

  async processData(data: MetrolinkResponse[]) {
    data.forEach(d => {
      Logger.log(`${d.StationLocation} - ${d.Direction}`);
    });
  }
}
