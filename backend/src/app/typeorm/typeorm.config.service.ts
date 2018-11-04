import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(readonly config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      ...this.config.postgres,
      entities: this.config.isProdEnvironment
        ? ['dist/**/**.entity{.ts,.js}']
        : ['src/**/**.entity{.ts,.js}'],
      logging: ['error', 'info', 'log', 'query', 'schema', 'warn'],
      logger: 'advanced-console',
      synchronize: false, // this.config.isDevEnvironment,
    };
  }
}
