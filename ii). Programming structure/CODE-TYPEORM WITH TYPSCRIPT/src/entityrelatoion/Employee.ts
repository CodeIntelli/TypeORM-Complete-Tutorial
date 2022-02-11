import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { Department } from "./Department";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    address: string;

    @Column()
    photo: string;

    @OneToOne(() => Department, department => department.profile)
    profile:Department

}