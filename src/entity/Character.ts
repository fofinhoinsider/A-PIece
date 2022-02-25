import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AkumaNoMi } from "./AkumaNoMi";
import { Race } from "./Race";

@Entity()
export class Character extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    firstName: string

    @Column({ nullable: true})
    middleName: string

    @Column({ nullable: true})
    lastName: string

    @Column()
    isAlive: boolean

    @ManyToOne(type => Race, race => race.characters)
    race: Race

    @ManyToMany(type => AkumaNoMi, akumaNoMi => [...akumaNoMi.formerUsers, akumaNoMi.currentUser])
    akumaNoMis: AkumaNoMi[]
}