import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";

@Entity()
export class Race extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @OneToMany(type => Character, character => character.race)
    characters: Character
}