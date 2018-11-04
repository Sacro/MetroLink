import { Test, TestingModule } from '@nestjs/testing';
import { MetrolinkHandlerService } from './metrolink-handler.service';

describe('MetrolinkHandlerService', () => {
  let service: MetrolinkHandlerService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetrolinkHandlerService],
    }).compile();
    service = module.get<MetrolinkHandlerService>(MetrolinkHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
