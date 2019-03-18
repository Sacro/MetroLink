import { Test, TestingModule } from '@nestjs/testing';
import { PubSubService } from './pubsub.service';
import { ConfigService } from '../config/config.service';

describe('PubSubService', () => {
  let service: PubSubService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, PubSubService],
    }).compile();
    service = module.get<PubSubService>(PubSubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
