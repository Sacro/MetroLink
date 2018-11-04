import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '../app/config/config.service';
import { MetrolinkReceiverService } from './metrolink-receiver.service';

describe('MetrolinkRecevierService', () => {
  let service: MetrolinkReceiverService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ConfigService, MetrolinkReceiverService],
    }).compile();
    service = module.get<MetrolinkReceiverService>(MetrolinkReceiverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
