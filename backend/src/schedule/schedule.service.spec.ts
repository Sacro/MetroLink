import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleService } from './schedule.service';
import { ConfigService } from '../app/config/config.service';
import { MetrolinkReceiverService } from './metrolink-receiver.service';

describe('ScheduleService', () => {
  let service: ScheduleService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, MetrolinkReceiverService, ScheduleService],
    }).compile();
    service = module.get<ScheduleService>(ScheduleService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
