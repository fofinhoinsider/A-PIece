import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./Organization";

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @ManyToOne(type => Organization, organization => organization.roles)
    organization: Organization
}