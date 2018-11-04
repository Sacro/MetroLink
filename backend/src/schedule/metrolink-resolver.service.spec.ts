import { Test, TestingModule } from '@nestjs/testing';
import { MetrolinkResolverService } from './metrolink-resolver.service';

describe('MetrolinkResolverService', () => {
  let service: MetrolinkResolverService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetrolinkResolverService],
    }).compile();
    service = module.get<MetrolinkResolverService>(MetrolinkResolverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
