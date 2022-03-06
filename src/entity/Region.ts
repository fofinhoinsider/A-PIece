import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";
import { Island } from "./Island";

@ObjectType()
@Entity()
export class Region extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column({ unique: true })
    name: string

    @Field((_type) => [Island])
    @OneToMany(type => Island, island => island.region)
    islands?: Island[]

    @Field((_type) => [Character])
    @OneToMany(type => Character, character => character.from)
    characters?: Character[]
}