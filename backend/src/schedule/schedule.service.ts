import { Injectable, Logger } from '@nestjs/common';
import { Interval, NestSchedule } from 'nest-schedule';
import { MetrolinkReceiverService } from './metrolink-receiver.service';

@Injectable()
export class ScheduleService extends NestSchedule {
  constructor(private readonly receiverService: MetrolinkReceiverService) {
    super();
  }

  @Interval(10_000)
  async getLatestData() {
    Logger.log('requesting...');
    const response = await this.receiverService.receive();
    Logger.log(JSON.stringify(response));
  }
}
