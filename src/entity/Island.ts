import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";
import { Region } from "./Region";

@ObjectType()
@Entity()
export class Island extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column({ unique: true })
    name: string

    @Field((_type) => Region)
    @ManyToOne(type => Region, region => region.islands)
    region: Region
}