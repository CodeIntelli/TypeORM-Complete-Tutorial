<!-- @format -->

## ENTITIES

- ## What is Entity?

  Entity is a class that maps to a database table (or collection when using MongoDB). You can create an entity by defining a new class and mark it with @Entity():

  ```javascript
  import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

  @Entity()
  export class User {
  	@PrimaryGeneratedColumn()
  	id: number;

  	@Column()
  	firstName: string;

  	@Column()
  	lastName: string;

  	@Column()
  	isActive: boolean;
  }
  ```

  [Read More...](https://typeorm.io/#/entities)

- ## Embedded Entities\

  There is an amazing way to reduce duplication in your app (using composition over inheritance) by using embedded columns.

  ```TypeScript
  import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

  @Entity()
  export class User {
     @PrimaryGeneratedColumn()
     id: string;

     @Column()
     firstName: string;

     @Column()
     lastName: string;

     @Column()
     isActive: boolean;
  }
  ```

  if we have same type fields like, firstname and lastname used in employee or many more table so we can reduce a code
  using class so example in below:

  ```TypeScript
  import {Column} from "typeorm";

  export class Name {

      @Column()
      first: string;

      @Column()
      last: string;

  }
  ```

  Then you can "connect" those columns in your entities:

  ```TypeScript
  import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
  import {Name} from "./Name";

  @Entity()
  export class User {

      @PrimaryGeneratedColumn()
      id: string;

      @Column(() => Name)
      name: Name;

      @Column()
      isActive: boolean;

  }
  ```

  [Read More...](https://typeorm.io/#/embedded-entities)

- ## Entity Inheritance

  You can reduce duplication in your code by using entity inheritance
  patterns. The simplest and the most effective is concrete table inheritance.

  For example, you have Photo, Question, Post entities:

  ```TypeScript
  @Entity()

  export class Photo {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      title: string;

      @Column()
      description: string;

      @Column()
      size: string;
  }
  ```

  id,title and size same fields in new tables so how can we use inheritance seeing below:
  To reduce duplication and produce a better abstraction we can create a base class called Content for them:

  ```TypeScript
  export abstract class Content {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      title: string;

      @Column()
      description: string;
  }


  @Entity()
  export class Photo extends Content {

  @Column()
  size: string;

  }
  ```

  [Read More...](https://typeorm.io/#/entity-inheritance)

- ## Tree Entities

  TypeORM supports the Adjacency list and Closure table patterns for storing tree structures.

  [Read More...](https://typeorm.io/#/tree-entities)

- ## View Entities

  View entity is a class that maps to a database view. You can create a view entity by defining a new class and mark it with @ViewEntity():

  step-1:

  ```TypeScript

  import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

  @Entity()
  export class Category {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

  }
  ```

  step-2:

  ```TypeScript
  import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
  import {Category} from "./Category";

  @Entity()
  export class Post {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @Column()
      categoryId: number;

      @ManyToOne(() => Category)
      @JoinColumn({ name: "categoryId" })
      category: Category;

  }
  ```

  step-3:

  ```TypeScript
  import {ViewEntity, ViewColumn, Connection} from "typeorm";

  @ViewEntity({
      expression: (connection: Connection) => connection.createQueryBuilder()
          .select("post.id", "id")
          .addSelect("post.name", "name")
          .addSelect("category.name", "categoryName")
          .from(Post, "post")
          .leftJoin(Category, "category", "category.id = post.categoryId")
  })
  export class PostCategory {

      @ViewColumn()
      id: number;

      @ViewColumn()
      name: string;

      @ViewColumn()
      categoryName: string;

  }
  ```

  then fill these tables with data and request all data from PostCategory view:

  step-4:

  ```TypeScript
  import {getManager} from "typeorm";
  import {Category} from "./entity/Category";
  import {Post} from "./entity/Post";
  import {PostCategory} from "./entity/PostCategory";

  const entityManager = getManager();

  const category1 = new Category();
  category1.name = "Cars";
  await entityManager.save(category1);

  const post1 = new Post();
  post1.name = "About BMW";
  post1.categoryId = category1.id;
  await entityManager.save(post1);

  const postCategories = await entityManager.find(PostCategory);
  ```

  [Read More...](https://typeorm.io/#/view-entities)

- ## Separating Entity Definition

  You can define an entity and its columns right in the model, using decorators. But some people prefer to define an entity and its columns inside separate files which are called "entity schemas" in TypeORM.

  example:

  ```TypeScript
  import {EntitySchema} from "typeorm";

  export const CategoryEntity = new EntitySchema({
      name: "category",
      columns: {
          id: {
              type: Number,
              primary: true,
              generated: true
          },
          name: {
              type: String
          }
      }
  });
  ```

  [Read More...](https://typeorm.io/#/separating-entity-definition)
