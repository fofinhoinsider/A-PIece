import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pirate } from "./Pirate";

@ObjectType()
@Entity()
export class Crew extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column({ unique: true })
    name: string

    @Field((_type) => Pirate)
    @OneToOne(type => Pirate)
    captain?: Pirate

    @Field((_type) => [Pirate])
    @OneToMany(type => Pirate, pirate => pirate.crew)
    members?: Pirate[]
}