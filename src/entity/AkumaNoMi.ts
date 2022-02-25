import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AkumaNoMiType } from "./AkumaNoMiType";
import { Character } from "./Character";

@Entity()
export class AkumaNoMi extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @Column({ nullable: true })
    description?: string

    @ManyToOne(type => AkumaNoMiType, akumaNoMiType => akumaNoMiType.akumaNoMis)
    type: AkumaNoMiType

    @ManyToOne(type => Character, character => character.akumaNoMis)
    @JoinColumn()
    currentUser: Character

    @ManyToMany(type => Character, character => character.akumaNoMis)
    @JoinTable()
    formerUsers: Character[]
}