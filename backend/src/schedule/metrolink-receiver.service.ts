import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import { ConfigService } from '../app/config/config.service';

@Injectable()
export class MetrolinkReceiverService {
  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {}

  async receive(): Promise<MetrolinkResponse[]> {
    return this.http
      .get('https://api.tfgm.com/odata/Metrolinks', {
        headers: { 'Ocp-Apim-Subscription-Key': this.config.tfgmApiKey },
      })
      .toPromise()
      .then(res => res.data);
  }
}

class MetrolinkResponse {
  Id: number;
  Line: Line;
  TLAREF: string;
  PIDREF: string;
  StationLocation: string;
  AtcoCode: string;
  Direction: Direction;
  Dest0: Dest;
  Carriages0: Carriages;
  Status0: Status;
  Wait0: string;
  Dest1: Dest;
  Carriages1: Carriages;
  Status1: Status;
  Wait1: string;
  Dest2: Dest;
  Carriages2: Carriages;
  Status2: Status;
  Wait2: string;
  Dest3: string;
  Carriages3: string;
  Status3: string;
  MessageBoard: string;
  Wait3: string;
  LastUpdated: string;
}

export enum Carriages {
  Double = 'Double',
  Empty = '',
  Single = 'Single',
}

export enum Dest {
  Altrincham = 'Altrincham',
  AshtonUnderLyne = 'Ashton-under-Lyne',
  AshtonViaMCUK = 'Ashton via MCUK',
  Bury = 'Bury',
  EastDidsbury = 'East Didsbury',
  Eccles = 'Eccles',
  EcclesViaMediaCityUK = 'Eccles via MediaCityUK',
  Empty = '',
  ManchesterAirport = 'Manchester Airport',
  Piccadilly = 'Piccadilly',
  RochdaleTownCentre = 'Rochdale Town Centre',
  Victoria = 'Victoria',
}

export enum Direction {
  Incoming = 'Incoming',
  Outgoing = 'Outgoing',
}

export enum Line {
  Airport = 'Airport',
  Altrincham = 'Altrincham',
  Bury = 'Bury',
  EastManchester = 'East Manchester',
  Eccles = 'Eccles',
  OldhamRochdale = 'Oldham & Rochdale',
  SouthManchester = 'South Manchester',
}

export enum Status {
  Arrived = 'Arrived',
  Departing = 'Departing',
  Due = 'Due',
  Empty = '',
}
