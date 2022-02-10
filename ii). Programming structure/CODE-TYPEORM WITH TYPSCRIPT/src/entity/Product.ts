import { Entity, PrimaryGeneratedColumn, Column, ChildEntity} from 'typeorm';
import { Content } from './Content';

@ChildEntity()
export class Product extends Content{

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	subcat_id: number;

    @Column()
    name: string;

	@Column()
	price: boolean;
}