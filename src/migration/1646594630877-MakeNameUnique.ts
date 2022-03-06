import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeNameUnique1646594630877 implements MigrationInterface {
    name = 'MakeNameUnique1646594630877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi_type\` ADD UNIQUE INDEX \`IDX_31771e37da4017726458a99ad6\` (\`name\`)`);
        await queryRunner.query(`ALTER TABLE \`crew\` ADD UNIQUE INDEX \`IDX_6f221bde3ab5944050ac8cbaa8\` (\`name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`crew\` DROP INDEX \`IDX_6f221bde3ab5944050ac8cbaa8\``);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi_type\` DROP INDEX \`IDX_31771e37da4017726458a99ad6\``);
    }

}
