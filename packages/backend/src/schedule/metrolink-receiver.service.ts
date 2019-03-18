import { HttpService, Injectable } from '@nestjs/common';
import { DateTime, Zone } from 'luxon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../app/config/config.service';
import { MetrolinkResponse, MetrolinkOdataResponse } from './entities';

@Injectable()
export class MetrolinkReceiverService {
  lastResponse: MetrolinkResponse[];

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
        map(res => res.data.value as MetrolinkResponse[]),
        map(res => {
          res.map(
            r =>
              (r.LastUpdated = DateTime.local()
                .setZone('Europe/London')
                .toLocaleString(DateTime.DATETIME_FULL)),
          );
          return res;
        }), // * /
      );
  }
}
