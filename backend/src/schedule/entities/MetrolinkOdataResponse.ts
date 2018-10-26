import { MetrolinkResponse } from './MetrolinkResponse';

export interface Welcome {
  '@odata.context': string;
  value: MetrolinkResponse[];
}
