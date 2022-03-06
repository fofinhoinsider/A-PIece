import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AkumaNoMiType } from "./AkumaNoMiType";
import { Character } from "./Character";

@ObjectType()
@Entity()
export class AkumaNoMi extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column({ unique: true })
    name: string

    @Field()
    @Column()
    description?: string

    @Field((_type) => AkumaNoMiType)
    @ManyToOne(type => AkumaNoMiType, akumaNoMiType => akumaNoMiType.akumaNoMis)
    type?: AkumaNoMiType

    @Field((_type) => Character)
    @ManyToOne(type => Character, character => character.akumaNoMis)
    @JoinColumn()
    currentUser?: Character

    @Field((_type) => [Character])
    @ManyToMany(type => Character, character => character.akumaNoMis)
    @JoinTable()
    previousUsers?: Character[]
}