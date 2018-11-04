import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Carriages, Direction, Line, Status } from '.';

@Entity()
export class MetrolinkResponse {
  @PrimaryColumn()
  Id: number;

  @Column('enum', {
    enum: Line,
  })
  Line: Line;

  @Column()
  TLAREF: string;

  @Column()
  PIDREF: string;

  @Column()
  StationLocation: string;

  @Column()
  AtcoCode: string;

  @Column('enum', {
    enum: Direction,
  })
  Direction: Direction;

  @Column()
  Dest0: string;

  @Column('enum', {
    enum: Carriages,
  })
  Carriages0: Carriages;

  @Column('enum', {
    enum: Status,
  })
  Status0: Status;

  @Column()
  Wait0: string;

  @Column()
  Dest1: string;

  @Column('enum', {
    enum: Carriages,
  })
  Carriages1: Carriages;

  @Column('enum', {
    enum: Status,
  })
  Status1: Status;

  @Column()
  Wait1: string;

  @Column()
  Dest2: string;

  @Column('enum', {
    enum: Carriages,
  })
  Carriages2: Carriages;

  @Column('enum', {
    enum: Status,
  })
  Status2: Status;

  @Column()
  Wait2: string;

  @Column()
  Dest3: string;

  @Column('enum', {
    enum: Carriages,
  })
  Carriages3: Carriages;

  @Column('enum', {
    enum: Status,
  })
  Status3: Status;

  @Column()
  MessageBoard: string;

  @Column()
  Wait3: string;

  @Column('timestamp')
  LastUpdated: string;
}
