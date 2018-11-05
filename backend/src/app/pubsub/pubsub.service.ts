import { Injectable } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import * as Redis from 'ioredis';
import { ConfigService } from '../../app/config/config.service';

@Injectable()
export class PubSubService {
  readonly pubsub: RedisPubSub;

  constructor(private readonly config: ConfigService) {
    const options: Redis.RedisOptions = {
      host: this.config.redis.host,
      port: this.config.redis.port,
    };

    this.pubsub = new RedisPubSub({
      publisher: new Redis(options),
      subscriber: new Redis(options),
    });
  }
}
