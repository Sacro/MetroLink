import { MetrolinkResponse } from './MetrolinkResponse.entity';

export interface MetrolinkOdataResponse {
  '@odata.context': string;
  value: MetrolinkResponse[];
}
