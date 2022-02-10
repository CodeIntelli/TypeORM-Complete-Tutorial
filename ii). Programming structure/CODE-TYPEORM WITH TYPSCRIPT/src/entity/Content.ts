import { PrimaryGeneratedColumn, Column, Entity, TableInheritance} from 'typeorm';

@Entity()
@TableInheritance({column:{type:'varchar',name:'type'}})
export abstract class Content{

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	cat_id: number;

}