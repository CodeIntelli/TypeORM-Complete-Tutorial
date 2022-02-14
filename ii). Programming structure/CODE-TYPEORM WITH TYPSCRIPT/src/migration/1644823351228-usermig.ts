import {MigrationInterface, QueryRunner} from "typeorm";

export class usermig1644823351228 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `gender` INT NOT NULL AFTER `email`")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
