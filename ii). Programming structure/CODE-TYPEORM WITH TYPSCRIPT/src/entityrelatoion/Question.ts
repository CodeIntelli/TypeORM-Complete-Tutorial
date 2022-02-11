import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Game } from "./Game";
@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    option: string;

    @ManyToMany(() => Game)
    @JoinTable()
    games: Game[];

}