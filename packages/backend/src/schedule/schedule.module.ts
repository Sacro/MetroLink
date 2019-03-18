import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetrolinkResponse } from './entities';
import { MetrolinkHandlerService } from './metrolink-handler.service';
import { MetrolinkReceiverService } from './metrolink-receiver.service';
import { MetrolinkResolverService } from './metrolink-resolver.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([MetrolinkResponse])],
  providers: [
    MetrolinkHandlerService,
    MetrolinkReceiverService,
    MetrolinkResolverService,
  ],
})
export class ScheduleModule {}
