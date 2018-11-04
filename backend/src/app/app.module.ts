import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '../schedule/schedule.module';
import { ConfigModule } from './config/config.module';
import { GraphqlConfigService } from './graphql/graphql.config.service';
import { TypeOrmConfigService } from './typeorm/typeorm.config.service';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlConfigService,
    }),
    ScheduleModule,
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
