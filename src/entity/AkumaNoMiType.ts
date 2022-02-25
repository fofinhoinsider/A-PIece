import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AkumaNoMi } from "./AkumaNoMi";

@Entity()
export class AkumaNoMiType extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @Column()
    description: string 

    @OneToMany(type => AkumaNoMi, akumaNoMi => akumaNoMi.type)
    akumaNoMis: AkumaNoMiType[]
}