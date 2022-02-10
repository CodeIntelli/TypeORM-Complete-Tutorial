
import { EntitySchema} from 'typeorm';


export const CategoryEntity = new EntitySchema({
    name: 'person',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated:true,
        },
        name: {
            type: String,
        },
        email: {
            type:String,
        },
        age: {
            type: Number,
            nullable: false
        }
    },
    checks: [
        {
            expression:`"age" > 20`
        },
        // {
        //     expression:""
        // }
    ]

})