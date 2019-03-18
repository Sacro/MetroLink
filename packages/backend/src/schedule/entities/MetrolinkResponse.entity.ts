import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';
import { Carriages, Direction, Line, Status } from '.';

@Entity()
@ObjectType()
export class MetrolinkResponse {
  @PrimaryColumn()
  @Field(type => ID)
  Id: number;

  @Column('enum', {
    enum: Line,
  })
  @Field()
  Line: Line;

  @Column()
  @Field()
  TLAREF: string;

  @Column()
  @Field()
  PIDREF: string;

  @Column()
  @Field()
  StationLocation: string;

  @Column()
  @Field()
  AtcoCode: string;

  @Column('enum', {
    enum: Direction,
  })
  @Field()
  Direction: Direction;

  @Column()
  @Field()
  Dest0: string;

  @Column('enum', {
    enum: Carriages,
  })
  @Field()
  Carriages0: Carriages;

  @Column('enum', {
    enum: Status,
  })
  @Field()
  Status0: Status;

  @Column()
  @Field()
  Wait0: string;

  @Column()
  @Field()
  Dest1: string;

  @Column('enum', {
    enum: Carriages,
  })
  @Field()
  Carriages1: Carriages;

  @Column('enum', {
    enum: Status,
  })
  @Field()
  Status1: Status;

  @Column()
  @Field()
  Wait1: string;

  @Column()
  @Field()
  Dest2: string;

  @Column('enum', {
    enum: Carriages,
  })
  @Field()
  Carriages2: Carriages;

  @Column('enum', {
    enum: Status,
  })
  @Field()
  Status2: Status;

  @Column()
  @Field()
  Wait2: string;

  @Column()
  @Field()
  Dest3: string;

  @Column('enum', {
    enum: Carriages,
  })
  @Field()
  Carriages3: Carriages;

  @Column('enum', {
    enum: Status,
  })
  @Field()
  Status3: Status;

  @Column()
  @Field()
  MessageBoard: string;

  @Column()
  @Field()
  Wait3: string;

  @Column('timestamp')
  @Field()
  LastUpdated: string;
}
