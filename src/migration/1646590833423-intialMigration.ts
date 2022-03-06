import {MigrationInterface, QueryRunner} from "typeorm";

export class intialMigration1646590833423 implements MigrationInterface {
    name = 'intialMigration1646590833423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`akuma_no_mi_type\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`race\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`island\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`regionId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`region\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sword\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`character\` (\`id\` varchar(36) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`middleName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`isAlive\` tinyint NOT NULL, \`raceId\` varchar(36) NULL, \`roleId\` varchar(36) NULL, \`fromId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`akuma_no_mi\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`typeId\` varchar(36) NULL, \`currentUserId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pirate\` (\`id\` varchar(36) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`middleName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`isAlive\` tinyint NOT NULL, \`raceId\` varchar(36) NULL, \`roleId\` varchar(36) NULL, \`fromId\` varchar(36) NULL, \`crewId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`crew\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`marine\` (\`id\` varchar(36) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`middleName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`isAlive\` tinyint NOT NULL, \`raceId\` varchar(36) NULL, \`roleId\` varchar(36) NULL, \`fromId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`character_akuma_no_mis_akuma_no_mi\` (\`characterId\` varchar(36) NOT NULL, \`akumaNoMiId\` varchar(36) NOT NULL, INDEX \`IDX_91d42f7a75261e95429e68cbbf\` (\`characterId\`), INDEX \`IDX_0c262fc2af517cb1ec0f508307\` (\`akumaNoMiId\`), PRIMARY KEY (\`characterId\`, \`akumaNoMiId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`character_swords_sword\` (\`characterId\` varchar(36) NOT NULL, \`swordId\` varchar(36) NOT NULL, INDEX \`IDX_0f0811b12dc3086211c0f705c5\` (\`characterId\`), INDEX \`IDX_4ccffa0e749e0fcb4a91661988\` (\`swordId\`), PRIMARY KEY (\`characterId\`, \`swordId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`akuma_no_mi_previous_users_character\` (\`akumaNoMiId\` varchar(36) NOT NULL, \`characterId\` varchar(36) NOT NULL, INDEX \`IDX_77a84bce0557f3d5158b7bb9e3\` (\`akumaNoMiId\`), INDEX \`IDX_fd4d48a621fc2f31c431dadb1e\` (\`characterId\`), PRIMARY KEY (\`akumaNoMiId\`, \`characterId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pirate_akuma_no_mis_akuma_no_mi\` (\`pirateId\` varchar(36) NOT NULL, \`akumaNoMiId\` varchar(36) NOT NULL, INDEX \`IDX_6949f5cea33e41864744851822\` (\`pirateId\`), INDEX \`IDX_295d4d94a7a52e5dbd82a9fe22\` (\`akumaNoMiId\`), PRIMARY KEY (\`pirateId\`, \`akumaNoMiId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pirate_swords_sword\` (\`pirateId\` varchar(36) NOT NULL, \`swordId\` varchar(36) NOT NULL, INDEX \`IDX_733641041b6c317f7810928293\` (\`pirateId\`), INDEX \`IDX_c03dc32ccf51d9637784df462e\` (\`swordId\`), PRIMARY KEY (\`pirateId\`, \`swordId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`marine_akuma_no_mis_akuma_no_mi\` (\`marineId\` varchar(36) NOT NULL, \`akumaNoMiId\` varchar(36) NOT NULL, INDEX \`IDX_251034932cf5bcccc7adc00c7b\` (\`marineId\`), INDEX \`IDX_ca1b4d1039b52ad58d4155dd79\` (\`akumaNoMiId\`), PRIMARY KEY (\`marineId\`, \`akumaNoMiId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`marine_swords_sword\` (\`marineId\` varchar(36) NOT NULL, \`swordId\` varchar(36) NOT NULL, INDEX \`IDX_39a3e83e0757a4c7476c366bc0\` (\`marineId\`), INDEX \`IDX_25c1b385057b376efac3e28973\` (\`swordId\`), PRIMARY KEY (\`marineId\`, \`swordId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`island\` ADD CONSTRAINT \`FK_ea32cb5fc3ac38338f22e2234ce\` FOREIGN KEY (\`regionId\`) REFERENCES \`region\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`character\` ADD CONSTRAINT \`FK_a7485d062b19695002b6175e8fb\` FOREIGN KEY (\`raceId\`) REFERENCES \`race\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`character\` ADD CONSTRAINT \`FK_6c2557382daaa6c6e8f63aadfbc\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`character\` ADD CONSTRAINT \`FK_ee58c41a9cb2250627ea8580441\` FOREIGN KEY (\`fromId\`) REFERENCES \`region\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi\` ADD CONSTRAINT \`FK_f556b222a69c57352185efd1e8c\` FOREIGN KEY (\`typeId\`) REFERENCES \`akuma_no_mi_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi\` ADD CONSTRAINT \`FK_de96d297ff86edd440c44bf9248\` FOREIGN KEY (\`currentUserId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pirate\` ADD CONSTRAINT \`FK_560f46d3f029a5c0f2dc5e55c09\` FOREIGN KEY (\`raceId\`) REFERENCES \`race\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pirate\` ADD CONSTRAINT \`FK_1f60c483dc2b95e6da6bee537d9\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pirate\` ADD CONSTRAINT \`FK_5742e4973d731d062d63eb744d3\` FOREIGN KEY (\`fromId\`) REFERENCES \`region\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pirate\` ADD CONSTRAINT \`FK_82196d26bab3bca306b34f34a6e\` FOREIGN KEY (\`crewId\`) REFERENCES \`crew\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`marine\` ADD CONSTRAINT \`FK_4950cef05a37a3764327bdd0b3f\` FOREIGN KEY (\`raceId\`) REFERENCES \`race\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`marine\` ADD CONSTRAINT \`FK_6e52a820782fc7963e66a9b195f\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`marine\` ADD CONSTRAINT \`FK_695a8d4de2fdaef7a92bc519d67\` FOREIGN KEY (\`fromId\`) REFERENCES \`region\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`character_akuma_no_mis_akuma_no_mi\` ADD CONSTRAINT \`FK_91d42f7a75261e95429e68cbbfe\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`character_akuma_no_mis_akuma_no_mi\` ADD CONSTRAINT \`FK_0c262fc2af517cb1ec0f5083076\` FOREIGN KEY (\`akumaNoMiId\`) REFERENCES \`akuma_no_mi\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`character_swords_sword\` ADD CONSTRAINT \`FK_0f0811b12dc3086211c0f705c5e\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`character_swords_sword\` ADD CONSTRAINT \`FK_4ccffa0e749e0fcb4a91661988e\` FOREIGN KEY (\`swordId\`) REFERENCES \`sword\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi_previous_users_character\` ADD CONSTRAINT \`FK_77a84bce0557f3d5158b7bb9e3a\` FOREIGN KEY (\`akumaNoMiId\`) REFERENCES \`akuma_no_mi\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi_previous_users_character\` ADD CONSTRAINT \`FK_fd4d48a621fc2f31c431dadb1e5\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pirate_akuma_no_mis_akuma_no_mi\` ADD CONSTRAINT \`FK_6949f5cea33e41864744851822f\` FOREIGN KEY (\`pirateId\`) REFERENCES \`pirate\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pirate_akuma_no_mis_akuma_no_mi\` ADD CONSTRAINT \`FK_295d4d94a7a52e5dbd82a9fe229\` FOREIGN KEY (\`akumaNoMiId\`) REFERENCES \`akuma_no_mi\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pirate_swords_sword\` ADD CONSTRAINT \`FK_733641041b6c317f78109282938\` FOREIGN KEY (\`pirateId\`) REFERENCES \`pirate\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pirate_swords_sword\` ADD CONSTRAINT \`FK_c03dc32ccf51d9637784df462e1\` FOREIGN KEY (\`swordId\`) REFERENCES \`sword\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`marine_akuma_no_mis_akuma_no_mi\` ADD CONSTRAINT \`FK_251034932cf5bcccc7adc00c7ba\` FOREIGN KEY (\`marineId\`) REFERENCES \`marine\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`marine_akuma_no_mis_akuma_no_mi\` ADD CONSTRAINT \`FK_ca1b4d1039b52ad58d4155dd794\` FOREIGN KEY (\`akumaNoMiId\`) REFERENCES \`akuma_no_mi\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`marine_swords_sword\` ADD CONSTRAINT \`FK_39a3e83e0757a4c7476c366bc08\` FOREIGN KEY (\`marineId\`) REFERENCES \`marine\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`marine_swords_sword\` ADD CONSTRAINT \`FK_25c1b385057b376efac3e289738\` FOREIGN KEY (\`swordId\`) REFERENCES \`sword\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`marine_swords_sword\` DROP FOREIGN KEY \`FK_25c1b385057b376efac3e289738\``);
        await queryRunner.query(`ALTER TABLE \`marine_swords_sword\` DROP FOREIGN KEY \`FK_39a3e83e0757a4c7476c366bc08\``);
        await queryRunner.query(`ALTER TABLE \`marine_akuma_no_mis_akuma_no_mi\` DROP FOREIGN KEY \`FK_ca1b4d1039b52ad58d4155dd794\``);
        await queryRunner.query(`ALTER TABLE \`marine_akuma_no_mis_akuma_no_mi\` DROP FOREIGN KEY \`FK_251034932cf5bcccc7adc00c7ba\``);
        await queryRunner.query(`ALTER TABLE \`pirate_swords_sword\` DROP FOREIGN KEY \`FK_c03dc32ccf51d9637784df462e1\``);
        await queryRunner.query(`ALTER TABLE \`pirate_swords_sword\` DROP FOREIGN KEY \`FK_733641041b6c317f78109282938\``);
        await queryRunner.query(`ALTER TABLE \`pirate_akuma_no_mis_akuma_no_mi\` DROP FOREIGN KEY \`FK_295d4d94a7a52e5dbd82a9fe229\``);
        await queryRunner.query(`ALTER TABLE \`pirate_akuma_no_mis_akuma_no_mi\` DROP FOREIGN KEY \`FK_6949f5cea33e41864744851822f\``);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi_previous_users_character\` DROP FOREIGN KEY \`FK_fd4d48a621fc2f31c431dadb1e5\``);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi_previous_users_character\` DROP FOREIGN KEY \`FK_77a84bce0557f3d5158b7bb9e3a\``);
        await queryRunner.query(`ALTER TABLE \`character_swords_sword\` DROP FOREIGN KEY \`FK_4ccffa0e749e0fcb4a91661988e\``);
        await queryRunner.query(`ALTER TABLE \`character_swords_sword\` DROP FOREIGN KEY \`FK_0f0811b12dc3086211c0f705c5e\``);
        await queryRunner.query(`ALTER TABLE \`character_akuma_no_mis_akuma_no_mi\` DROP FOREIGN KEY \`FK_0c262fc2af517cb1ec0f5083076\``);
        await queryRunner.query(`ALTER TABLE \`character_akuma_no_mis_akuma_no_mi\` DROP FOREIGN KEY \`FK_91d42f7a75261e95429e68cbbfe\``);
        await queryRunner.query(`ALTER TABLE \`marine\` DROP FOREIGN KEY \`FK_695a8d4de2fdaef7a92bc519d67\``);
        await queryRunner.query(`ALTER TABLE \`marine\` DROP FOREIGN KEY \`FK_6e52a820782fc7963e66a9b195f\``);
        await queryRunner.query(`ALTER TABLE \`marine\` DROP FOREIGN KEY \`FK_4950cef05a37a3764327bdd0b3f\``);
        await queryRunner.query(`ALTER TABLE \`pirate\` DROP FOREIGN KEY \`FK_82196d26bab3bca306b34f34a6e\``);
        await queryRunner.query(`ALTER TABLE \`pirate\` DROP FOREIGN KEY \`FK_5742e4973d731d062d63eb744d3\``);
        await queryRunner.query(`ALTER TABLE \`pirate\` DROP FOREIGN KEY \`FK_1f60c483dc2b95e6da6bee537d9\``);
        await queryRunner.query(`ALTER TABLE \`pirate\` DROP FOREIGN KEY \`FK_560f46d3f029a5c0f2dc5e55c09\``);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi\` DROP FOREIGN KEY \`FK_de96d297ff86edd440c44bf9248\``);
        await queryRunner.query(`ALTER TABLE \`akuma_no_mi\` DROP FOREIGN KEY \`FK_f556b222a69c57352185efd1e8c\``);
        await queryRunner.query(`ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_ee58c41a9cb2250627ea8580441\``);
        await queryRunner.query(`ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_6c2557382daaa6c6e8f63aadfbc\``);
        await queryRunner.query(`ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_a7485d062b19695002b6175e8fb\``);
        await queryRunner.query(`ALTER TABLE \`island\` DROP FOREIGN KEY \`FK_ea32cb5fc3ac38338f22e2234ce\``);
        await queryRunner.query(`DROP INDEX \`IDX_25c1b385057b376efac3e28973\` ON \`marine_swords_sword\``);
        await queryRunner.query(`DROP INDEX \`IDX_39a3e83e0757a4c7476c366bc0\` ON \`marine_swords_sword\``);
        await queryRunner.query(`DROP TABLE \`marine_swords_sword\``);
        await queryRunner.query(`DROP INDEX \`IDX_ca1b4d1039b52ad58d4155dd79\` ON \`marine_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP INDEX \`IDX_251034932cf5bcccc7adc00c7b\` ON \`marine_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP TABLE \`marine_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP INDEX \`IDX_c03dc32ccf51d9637784df462e\` ON \`pirate_swords_sword\``);
        await queryRunner.query(`DROP INDEX \`IDX_733641041b6c317f7810928293\` ON \`pirate_swords_sword\``);
        await queryRunner.query(`DROP TABLE \`pirate_swords_sword\``);
        await queryRunner.query(`DROP INDEX \`IDX_295d4d94a7a52e5dbd82a9fe22\` ON \`pirate_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP INDEX \`IDX_6949f5cea33e41864744851822\` ON \`pirate_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP TABLE \`pirate_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP INDEX \`IDX_fd4d48a621fc2f31c431dadb1e\` ON \`akuma_no_mi_previous_users_character\``);
        await queryRunner.query(`DROP INDEX \`IDX_77a84bce0557f3d5158b7bb9e3\` ON \`akuma_no_mi_previous_users_character\``);
        await queryRunner.query(`DROP TABLE \`akuma_no_mi_previous_users_character\``);
        await queryRunner.query(`DROP INDEX \`IDX_4ccffa0e749e0fcb4a91661988\` ON \`character_swords_sword\``);
        await queryRunner.query(`DROP INDEX \`IDX_0f0811b12dc3086211c0f705c5\` ON \`character_swords_sword\``);
        await queryRunner.query(`DROP TABLE \`character_swords_sword\``);
        await queryRunner.query(`DROP INDEX \`IDX_0c262fc2af517cb1ec0f508307\` ON \`character_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP INDEX \`IDX_91d42f7a75261e95429e68cbbf\` ON \`character_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP TABLE \`character_akuma_no_mis_akuma_no_mi\``);
        await queryRunner.query(`DROP TABLE \`marine\``);
        await queryRunner.query(`DROP TABLE \`crew\``);
        await queryRunner.query(`DROP TABLE \`pirate\``);
        await queryRunner.query(`DROP TABLE \`akuma_no_mi\``);
        await queryRunner.query(`DROP TABLE \`character\``);
        await queryRunner.query(`DROP TABLE \`sword\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`region\``);
        await queryRunner.query(`DROP TABLE \`island\``);
        await queryRunner.query(`DROP TABLE \`race\``);
        await queryRunner.query(`DROP TABLE \`akuma_no_mi_type\``);
    }

}
