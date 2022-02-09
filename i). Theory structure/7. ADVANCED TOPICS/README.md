<!-- @format -->

## Advanced Topics

### Migrations

Once you get into production you'll need to synchronize model changes into the database. Typically it is unsafe to use synchronize: true for schema synchronization on production once you get data in your database. Here is where migrations come to help.
(if your table add extra fields and get changes directly that time used to migration)

Before creating a new migration you need to setup your connection options properly:

```Typescript
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "test",
    "password": "test",
    "database": "test",
    "entities": ["entity/*.js"],
    "migrationsTableName": "custom_migration_table",
    "migrations": ["migration/*.js"],
    "cli": {
        "migrationsDir": "migration"
    }
}
```

Once you setup connection options you can create a new migration using CLI:

```Typescript
typeorm migration:create -n PostRefactoring
```

Here, PostRefactoring is the name of the migration - you can specify any name you want.

Let's see what the migration looks like with our Post changes:

```Typescript
import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoringTIMESTAMP implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`);
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "name" TO "title"`); // reverts things made in "up" method
    }
}
[more options](https://typeorm.io/#/migrations)
```
