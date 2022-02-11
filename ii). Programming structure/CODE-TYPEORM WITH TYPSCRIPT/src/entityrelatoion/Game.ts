import { Entity, PrimaryGeneratedColumn, Column, ManyToMany,JoinTable } from "typeorm";
import { Question } from "./Question";
@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(()=>Question,question=>question.games)
    question: Question[];

}