<!-- @format -->

## Query Builder

QueryBuilder is one of the most powerful features of TypeORM - it allows you to build SQL queries using elegant and convenient syntax, execute them and get automatically transformed entities.

- using connection

```Typescript
import {getConnection} from "typeorm";

const user = await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(User, "user")
    .where("user.id = :id", { id: 1 })
    .getOne();
```

- using entity manager

```TypeScript
import {getManager} from "typeorm";

const user = await getManager()
    .createQueryBuilder(User, "user")
    .where("user.id = :id", { id: 1 })
    .getOne();
```

- Using repository

```TypeScript
import {getRepository} from "typeorm";

const user = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: 1 })
    .getOne();
```

### There are 4 types of querybilder

- SelectQueryBuilder - used to build and execute SELECT queries. Example:

```TypeScript
import {getConnection} from "typeorm";

const user = await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(User, "user")
    .where("user.id = :id", { id: 1 })
    .getOne();

```

- InsertQueryBuilder - used to build and execute INSERT queries. Example:

```TypeScript
import {getConnection} from "typeorm";

await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        { firstName: "Timber", lastName: "Saw" },
        { firstName: "Phantom", lastName: "Lancer" }
     ])
    .execute();
```

- UpdateQueryBuilder - used to build and execute UPDATE queries. Example:

```TypeScript
import {getConnection} from "typeorm";

await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ firstName: "Timber", lastName: "Saw" })
    .where("id = :id", { id: 1 })
    .execute();
```

- DeleteQueryBuilder - used to build and execute DELETE queries. Example:

```TypeScript
import {getConnection} from "typeorm";

await getConnection()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", { id: 1 })
    .execute();
```

[In Brief want details plz click here....](https://typeorm.io/#/select-query-builder)
