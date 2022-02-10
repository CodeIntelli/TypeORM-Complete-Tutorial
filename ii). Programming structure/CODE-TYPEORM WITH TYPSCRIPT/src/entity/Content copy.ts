// extend this class to all mainh class in this crated it common type filed
import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class Content{

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	cat_id: number;

}