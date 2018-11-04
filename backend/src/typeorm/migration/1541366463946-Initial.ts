import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1541366463946 implements MigrationInterface {
  // tslint:disable:max-line-length
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_line_enum" AS ENUM('Airport', 'Altrincham', 'Bury', 'East Manchester', 'Eccles', 'Oldham & Rochdale', 'South Manchester')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_direction_enum" AS ENUM('Incoming', 'Outgoing')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_carriages0_enum" AS ENUM('Double', '', 'Single')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_status0_enum" AS ENUM('Arrived', 'Departing', 'Due', '')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_carriages1_enum" AS ENUM('Double', '', 'Single')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_status1_enum" AS ENUM('Arrived', 'Departing', 'Due', '')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_carriages2_enum" AS ENUM('Double', '', 'Single')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_status2_enum" AS ENUM('Arrived', 'Departing', 'Due', '')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_carriages3_enum" AS ENUM('Double', '', 'Single')`,
    );
    await queryRunner.query(
      `CREATE TYPE "metrolink_response_status3_enum" AS ENUM('Arrived', 'Departing', 'Due', '')`,
    );
    await queryRunner.query(
      `CREATE TABLE "metrolink_response" ("Id" integer NOT NULL, "Line" "metrolink_response_line_enum" NOT NULL, "TLAREF" character varying NOT NULL, "PIDREF" character varying NOT NULL, "StationLocation" character varying NOT NULL, "AtcoCode" character varying NOT NULL, "Direction" "metrolink_response_direction_enum" NOT NULL, "Dest0" character varying NOT NULL, "Carriages0" "metrolink_response_carriages0_enum" NOT NULL, "Status0" "metrolink_response_status0_enum" NOT NULL, "Wait0" character varying NOT NULL, "Dest1" character varying NOT NULL, "Carriages1" "metrolink_response_carriages1_enum" NOT NULL, "Status1" "metrolink_response_status1_enum" NOT NULL, "Wait1" character varying NOT NULL, "Dest2" character varying NOT NULL, "Carriages2" "metrolink_response_carriages2_enum" NOT NULL, "Status2" "metrolink_response_status2_enum" NOT NULL, "Wait2" character varying NOT NULL, "Dest3" character varying NOT NULL, "Carriages3" "metrolink_response_carriages3_enum" NOT NULL, "Status3" "metrolink_response_status3_enum" NOT NULL, "MessageBoard" character varying NOT NULL, "Wait3" character varying NOT NULL, "LastUpdated" TIMESTAMP NOT NULL, CONSTRAINT "PK_c3192d87a1136596387cbe7b3be" PRIMARY KEY ("Id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "metrolink_response"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_status3_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_carriages3_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_status2_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_carriages2_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_status1_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_carriages1_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_status0_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_carriages0_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_direction_enum"`);
    await queryRunner.query(`DROP TYPE "metrolink_response_line_enum"`);
  }
}
