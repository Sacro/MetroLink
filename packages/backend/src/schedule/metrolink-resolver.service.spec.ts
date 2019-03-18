import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MetrolinkResponse } from './entities';
import { MetrolinkResolverService } from './metrolink-resolver.service';

describe('MetrolinkResolverService', () => {
  let service: MetrolinkResolverService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        {
          provide: getRepositoryToken(MetrolinkResponse),
          useClass: Repository,
        },
        MetrolinkResolverService,
      ],
    }).compile();
    service = module.get<MetrolinkResolverService>(MetrolinkResolverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
