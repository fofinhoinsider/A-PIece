import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";

@ObjectType()
@Entity()
export class Role extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column({ unique: true })
    name: string

    @Field((_type) => [Character])
    @OneToMany(type => Character, character => character.role)
    characters?: Character[]
}