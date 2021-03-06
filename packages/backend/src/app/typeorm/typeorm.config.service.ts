import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import { TypeormLoggerService } from './typeorm.logger.service';

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
      logging: ['error'],
      // logger: new TypeormLoggerService(),
    };
  }
}
