<!-- @format -->

## ENTITY MANAGER & REPOSITORY

### Entity manager

Using EntityManager you can manage (insert, update, delete, load, etc.) any entity.

```Typescript
import {getManager} from "typeorm";
import {User} from "./entity/User";

const entityManager = getManager(); // you can also get it via getConnection().manager
const user = await entityManager.findOne(User, 1);
user.name = "Umed";
await entityManager.save(user);
```

### Repository

Repository is just like EntityManager but its operations are limited to a concrete entity.

```TypeScript
import {getRepository} from "typeorm";
import {User} from "./entity/User";

const userRepository = getRepository(User); // you can also get it via getConnection().getRepository() or getManager().getRepository()
const user = await userRepository.findOne(1);
user.name = "Umed";
await userRepository.save(user);
```

There are 3 types of repositories:

- Repository - Regular repository for any entity.
- TreeRepository - Repository, extensions of Repository used for tree-entities (like entities marked with @Tree decorator). Has special methods to work with tree structures.
- MongoRepository - Repository with special functions used only with MongoDB.

### Basic options

All repository and manager find methods accept special options you can use to query data you need without using QueryBuilder:

- select - indicates which properties of the main object must be selected

```TypeScript
userRepository.find({ select: ["firstName", "lastName"] });
```

- relations - relations needs to be loaded with the main entity.

```TypeScript
userRepository.find({ relations: ["profile", "photos", "videos"] });
userRepository.find({
    relations: ["profile", "photos", "videos", "videos.video_attributes"],
});
```

- join - joins needs to be performed for the entity.

```TypeScript
userRepository.find({
    join: {
        alias: "user",
        leftJoinAndSelect: {
            profile: "user.profile",
            photo: "user.photos",
            video: "user.videos",
        },
    },
});
```

- where - simple conditions by which entity should be queried.

```TypeScript
userRepository.find({ where: { firstName: "Timber", lastName: "Saw" } });
```

- order - selection order.

```TypeScript
userRepository.find({
    order: {
        name: "ASC",
        id: "DESC",
    },
});
```

- withDeleted - include entities which have been soft deleted with softDelete or softRemove, e.g. have their @DeleteDateColumn column set. By default, soft deleted entities are not included.

```TypeScript
userRepository.find({
    withDeleted: true,
});
```

- skip - offset (paginated) from where entities should be taken.

```TypeScript
userRepository.find({
    skip: 5,
});
```

- take - limit (paginated) - max number of entities that should be taken.

```TypeScript
userRepository.find({
    take: 10,
});
```

- cache - Enables or disables query result caching. See caching for more information and options.

```TypeScript
userRepository.find({
    cache: true,
});
```

- lock - Enables locking mechanism for query. Can be used only in findOne method.

```TypeScript
{ mode: "optimistic", version: number|Date }
```

[if you want more options you can click here](https://typeorm.io/#/find-options/advanced-options)

### Custom repositories

Usually custom repositories are created for a single entity and contains its specific queries. For example, let's say we want to have a method called findByName(firstName: string, lastName: string) which will search for users by a given first and last names.

```TypeScript
import {EntityRepository, Repository} from "typeorm";
import {User} from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    findByName(firstName: string, lastName: string) {
        return this.findOne({ firstName, lastName });
    }
}
```

[if you want more options you can click here](https://typeorm.io/#/custom-repository/custom-repository-extends-standard-repository)

## [more details is here...](https://typeorm.io/#/entity-manager-api)
