import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '../app/config/config.service';
import { PubSubService } from '../app/pubsub/pubsub.service';
import { MetrolinkResolverService } from './metrolink-resolver.service';

describe('MetrolinkResolverService', () => {
  let service: MetrolinkResolverService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigService, PubSubService],
      providers: [MetrolinkResolverService],
    }).compile();
    service = module.get<MetrolinkResolverService>(MetrolinkResolverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
