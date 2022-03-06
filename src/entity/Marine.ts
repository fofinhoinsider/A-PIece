import { Field, ObjectType } from "type-graphql";
import { Entity, ManyToOne, OneToOne } from "typeorm";
import { Character } from "./Character";
import { Crew } from "./Crew";
import { Role } from "./Role";

@ObjectType()
@Entity()
export class Marine extends Character {
    @Field((_type) => Role)
    @ManyToOne(type => Role, role => role.characters)
    role: Role
}