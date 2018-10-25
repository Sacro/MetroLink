import { HttpModule, Module } from '@nestjs/common';
import { MetrolinkReceiverService } from './metrolink-receiver.service';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [HttpModule],
  providers: [ScheduleService, MetrolinkReceiverService],
})
export class ScheduleModule {}
