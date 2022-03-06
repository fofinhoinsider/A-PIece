import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AkumaNoMi } from "./AkumaNoMi";
import { Island } from "./Island";
import { Race } from "./Race";
import { Region } from "./Region";
import { Role } from "./Role";
import { Sword } from "./Sword";

@ObjectType()
@Entity()
export class Character extends BaseEntity{
    @Field((_type) => Number)
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    middleName?: string

    @Field()
    @Column()
    lastName?: string

    @Field()
    @Column()
    isAlive: boolean

    @Field((_type) => Race)
    @ManyToOne(type => Race, race => race.characters)
    race?: Race

    @Field((_type) => [AkumaNoMi])
    @ManyToMany(type => AkumaNoMi, akumaNoMi => [...akumaNoMi.previousUsers, akumaNoMi.currentUser])
    @JoinTable()
    akumaNoMis?: AkumaNoMi[]
    
    @Field((_type) => Role)
    @ManyToOne(type => Role, role => role.characters )
    role?: Role
    
    @Field((_type) => Region)
    @ManyToOne(type => Region, region => region.characters )
    from?: Region

    @Field((_type) => [Sword])
    @ManyToMany(type => Sword, sword => [...sword.previousUsers, sword.currentUser])
    @JoinTable()
    swords?: Sword[]
}