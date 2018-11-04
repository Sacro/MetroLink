import { Injectable, Logger } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { buildSchema, useContainer } from 'type-graphql';
import { ConfigService } from 'app/config/config.service';
import { PubSubService } from 'app/pubsub/pubsub.service';
import { PubSubOptions } from 'graphql-subscriptions';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  constructor(
    private readonly configService: ConfigService,
    private readonly pubsubService: PubSubService,
  ) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    const options: PubSubOptions = {};

    const schema = await buildSchema({
      resolvers: [__dirname + '../../**/*.resolver.ts'],
      pubSub: { ...this.pubsubService.pubsub.asyncIterator, ...options },
    });

    return {
      debug: this.configService.isDevEnvironment,
      tracing: this.configService.isDevEnvironment,
      subscriptions: {
        onConnect: (connectionParams, websocket, context) => {
          Logger.log(`${connectionParams}, ${websocket}, ${context}`);
        },
        onDisconnect: () => {
          Logger.log('Disconnected');
        },
      },
      installSubscriptionHandlers: true,
      playground: true,
      schema,
    };
  }

  setContainer(container: any) {
    useContainer(container);
  }
}
