import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { buildSchema, useContainer } from 'type-graphql';
import { ConfigService } from 'app/config/config.service';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  async createGqlOptions(): Promise<GqlModuleOptions> {
    const schema = await buildSchema({
      resolvers: [__dirname + '../../**/*.resolver.ts'],
    });

    return {
      debug: this.configService.isDevEnvironment,
      playground: true,
      schema,
    };
  }

  setContainer(container: any) {
    useContainer(container);
  }
}
