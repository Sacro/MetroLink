import { Injectable } from '@nestjs/common';
import { PubSub, PubSubEngine, PubSubOptions } from 'graphql-subscriptions';

@Injectable()
export class PubSubService {
  readonly pubsub: PubSub;

  constructor() {
    this.pubsub = new PubSub();
  }
}
