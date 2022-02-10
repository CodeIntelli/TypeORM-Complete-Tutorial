import { EntitySchema} from 'typeorm';

export interface Catgoryvalidation{
    id: number,
    name:string
}

export const CategoryEntity = new EntitySchema<Catgoryvalidation>({
    name: 'catgories',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated:true,
        },
        name: {
            type: String,
        }
    }

})