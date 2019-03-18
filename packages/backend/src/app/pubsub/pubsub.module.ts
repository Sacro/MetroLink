import { Module, Global } from '@nestjs/common';
import { PubSubService } from './pubsub.service';

@Global()
@Module({
  providers: [
    {
      provide: PubSubService,
      useClass: PubSubService,
    },
  ],
  exports: [PubSubService],
})
export class PubSubModule {}
