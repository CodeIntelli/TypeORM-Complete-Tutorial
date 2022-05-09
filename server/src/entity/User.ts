import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import bcrypt from "bcryptjs";

@Entity()
export class User {
    static exists(arg0: { email: any; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    
    // at tha registarion time
    setPassword = (password: string) => {
        return (this.password = bcrypt.hashSync(password,7))
    }

    // at tha login time
    isValidPassword = (password: string) => {
        return bcrypt.compareSync(password,this.password)
    }
}