import { Field, ObjectType } from "type-graphql";
import { Entity, ManyToOne, OneToOne } from "typeorm";
import { Character } from "./Character";
import { Crew } from "./Crew";
import { Role } from "./Role";

@ObjectType()
@Entity()
export class Pirate extends Character {
    @Field((_type) => Crew)
    @OneToOne(type => Crew)
    captainOf?: Crew

    @Field((_type) => Crew)
    @ManyToOne(type => Crew, crew => crew.members)
    crew: Crew
    
    @Field((_type) => Role)
    @ManyToOne(type => Role, role => role.characters)
    role?: Role
}