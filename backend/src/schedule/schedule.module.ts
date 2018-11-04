import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetrolinkResponse } from './entities';
import { MetrolinkHandlerService } from './metrolink-handler.service';
import { MetrolinkReceiverService } from './metrolink-receiver.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([MetrolinkResponse])],
  providers: [MetrolinkHandlerService, MetrolinkReceiverService],
})
export class ScheduleModule {}
