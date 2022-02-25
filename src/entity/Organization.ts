import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role";

@Entity()
export class Organization extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @OneToMany(type => Role, role => role.organization)
    roles: Role[]
}