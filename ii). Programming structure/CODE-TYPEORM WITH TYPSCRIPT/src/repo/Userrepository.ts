import { User } from "../entity/User";
import { AbstractRepository, EntityRepository } from "typeorm";

@EntityRepository(User)

export class Userrepo extends AbstractRepository<User>{
    customSave(Name: string, email: string) {
        const data = new User();
        data.Name = Name,
        data.email = email  
        return this.manager.save(data)
    }
}