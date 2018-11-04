import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { Carriages, Dest, Direction, Line, Status } from '.';

@Entity()
export class MetrolinkResponse extends BaseEntity {
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

  @Column('enum', {
    enum: Dest,
  })
  Dest0: Dest;

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

  @Column('enum', {
    enum: Dest,
  })
  Dest1: Dest;

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

  @Column('enum', {
    enum: Dest,
  })
  Dest2: Dest;

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

  @Column('enum', {
    enum: Dest,
  })
  Dest3: Dest;

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

  @Column()
  LastUpdated: string;
}
