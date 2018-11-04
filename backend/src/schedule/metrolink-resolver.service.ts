import { Injectable, Logger } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { PubSubService } from 'app/pubsub/pubsub.service';
import { Arg, Int, Query, Subscription, Root, Args } from 'type-graphql';
import { Repository } from 'typeorm';
import { MetrolinkResponse } from './entities';

@Injectable()
@Resolver()
export class MetrolinkResolverService {
  constructor(
    private readonly pubSubService: PubSubService,
    @InjectRepository(MetrolinkResponse)
    private readonly repository: Repository<MetrolinkResponse>,
  ) {
    Logger.log('Service Constructed', 'MetrolinkResolverService');
  }

  @Query(_returns => [MetrolinkResponse])
  getResponses(): Promise<MetrolinkResponse[]> {
    return this.repository.find();
  }

  @Query(_returns => MetrolinkResponse, { nullable: true })
  async getResponseById(
    @Arg('id', _type => Int) id: number,
  ): Promise<MetrolinkResponse | undefined> {
    return this.repository.findOne(id);
  }

  @Subscription(_returns => MetrolinkResponse, {
    topics: 'updatedResponse',
  })
  async updatedResponse(@Root() payload: MetrolinkResponse) {
    Logger.log(`Payload: ${payload}`);
    return payload;
  }
}
