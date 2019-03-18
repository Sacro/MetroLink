import { Injectable, Logger } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { buildSchema, useContainer } from 'type-graphql';
import { ConfigService } from '../../app/config/config.service';
import { PubSubService } from '../../app/pubsub/pubsub.service';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  constructor(
    private readonly configService: ConfigService,
    private readonly pubsubService: PubSubService,
  ) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    const schema = await buildSchema({
      resolvers: [__dirname + '../../**/*.resolver.ts'],
      pubSub: this.pubsubService.pubsub,
    });

    return {
      debug: this.configService.isDevEnvironment,
      tracing: this.configService.isDevEnvironment,
      installSubscriptionHandlers: true,
      playground: true,
      schema,
    };
  }

  setContainer(container: any) {
    useContainer(container);
  }
}
