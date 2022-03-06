import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";

@ObjectType()
@Entity()
export class Race extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column()
    name: string

    @Field((_type) => [Character])
    @OneToMany(type => Character, character => character.race)
    characters?: Character[]
}