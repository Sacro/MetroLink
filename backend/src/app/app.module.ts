import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '../schedule/schedule.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmConfigService } from './typeorm/typeorm.config.service';

@Module({
  imports: [
    ConfigModule,
    ScheduleModule,
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
