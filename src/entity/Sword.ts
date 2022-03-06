import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";

@ObjectType()
@Entity()
export class Sword extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column({ unique: true })
    name: string

    @Field((_type) => [Character])
    @ManyToMany(type => Character, character => character.akumaNoMis)
    previousUsers?: Character[]

    @Field((_type) => [Character])
    @ManyToMany(type => Character, character => character.akumaNoMis)
    currentUser?: Character[]
}