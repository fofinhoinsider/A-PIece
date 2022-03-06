import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AkumaNoMi } from "./AkumaNoMi";

@ObjectType()
@Entity()
export class AkumaNoMiType extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number

    @Field()
    @Column({ unique: true })
    name: string

    @Field()
    @Column()
    description?: string 

    @Field((_type) => [AkumaNoMi])
    @OneToMany(type => AkumaNoMi, akumaNoMi => akumaNoMi.type)
    akumaNoMis?: AkumaNoMi[]
}