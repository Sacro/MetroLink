import { Injectable, Logger } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Arg, Int, Query } from 'type-graphql';
import { Repository } from 'typeorm';
import { MetrolinkResponse } from './entities';

@Injectable()
@Resolver()
export class MetrolinkResolverService {
  constructor(
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
}
