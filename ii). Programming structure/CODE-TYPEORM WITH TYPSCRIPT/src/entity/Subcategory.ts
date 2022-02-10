import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { Content } from './Content';

@Entity()
export class Subcategory extends Content{

	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	subcat_name: string;

}