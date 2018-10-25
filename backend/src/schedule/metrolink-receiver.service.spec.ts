import { Test, TestingModule } from '@nestjs/testing';
import { MetrolinkReceiverService } from './metrolink-receiver.service';

describe('MetrolinkRecevierService', () => {
  let service: MetrolinkReceiverService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetrolinkReceiverService],
    }).compile();
    service = module.get<MetrolinkReceiverService>(MetrolinkReceiverService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
