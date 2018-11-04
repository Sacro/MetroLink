import { HttpModule, Module } from '@nestjs/common';
import { MetrolinkHandlerService } from './metrolink-handler.service';
import { MetrolinkReceiverService } from './metrolink-receiver.service';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [HttpModule],
  providers: [
    MetrolinkHandlerService,
    MetrolinkReceiverService,
    ScheduleService,
  ],
})
export class ScheduleModule {}
