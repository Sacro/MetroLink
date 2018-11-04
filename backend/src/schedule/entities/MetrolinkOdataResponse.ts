import { MetrolinkResponse } from './MetrolinkResponse';

export interface MetrolinkOdataResponse {
  '@odata.context': string;
  value: MetrolinkResponse[];
}
