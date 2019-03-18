import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ConfigService } from '../app/config/config.service';
import { PubSubService } from '../app/pubsub/pubsub.service';
import { MetrolinkResponse } from './entities';
import { MetrolinkHandlerService } from './metrolink-handler.service';
import { MetrolinkReceiverService } from './metrolink-receiver.service';
import { MetrolinkResolverService } from './metrolink-resolver.service';

jest.mock('@nestjs/common/http/http.service');

describe('MetrolinkHandlerService', () => {
  let service: MetrolinkHandlerService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        HttpService,
        MetrolinkHandlerService,
        MetrolinkReceiverService,
        MetrolinkResolverService,
        PubSubService,
        {
          provide: getRepositoryToken(MetrolinkResponse),
          useClass: Repository,
        },
      ],
    }).compile();
    service = module.get<MetrolinkHandlerService>(MetrolinkHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
