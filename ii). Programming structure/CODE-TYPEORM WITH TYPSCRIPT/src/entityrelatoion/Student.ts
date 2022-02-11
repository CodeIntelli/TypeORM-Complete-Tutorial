import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Photo } from "./Photo";
@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    std_name: string;

    @OneToMany(()=>Photo,photo=>photo.student)
    photos: Photo[];

}