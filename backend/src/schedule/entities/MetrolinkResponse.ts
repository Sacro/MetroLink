import { Carriages, Dest, Direction, Line, Status } from './';

export class MetrolinkResponse {
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
