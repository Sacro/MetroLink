import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../app/config/config.service';
import { MetrolinkResponse, MetrolinkOdataResponse } from './entities';

@Injectable()
export class MetrolinkReceiverService {
  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {}

  async receive(): Promise<Observable<MetrolinkResponse[]>> {
    return this.http
      .get<MetrolinkOdataResponse>('https://api.tfgm.com/odata/Metrolinks', {
        headers: { 'Ocp-Apim-Subscription-Key': this.config.tfgmApiKey },
      })
      .pipe(
        map(res => res.data.value),
        // map(res => {
        //   res.map(r => (r.LastUpdated = null));
        //   return res;
        // }),
      );
  }
}
