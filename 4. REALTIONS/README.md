<!-- @format -->

## RELATIONS

Relations helps you to work with related entities easily. There are several types of relations:

- one-to-one using @OneToOne
- many-to-one using @ManyToOne
- one-to-many using @OneToMany
- many-to-many using @ManyToMany

### 1. CASCADE

It will default to false, meaning no cascades. Setting cascade: true will enable full cascades. You can also specify options by providing an array.

```Typescript
@Entity(Post)
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    // Full cascades on categories.
    @ManyToMany(type => PostCategory, {
        cascade: true
    })
    @JoinTable()
    categories: PostCategory[];

    // Cascade insert here means if there is a new PostDetails instance set
    // on this relation, it will be inserted automatically to the db when you save this Post entity
    @ManyToMany(type => PostDetails, details => details.posts, {
        cascade: ["insert"]
    })
    @JoinTable()
    details: PostDetails[];

    // Cascade update here means if there are changes to an existing PostImage, it
    // will be updated automatically to the db when you save this Post entity
    @ManyToMany(type => PostImage, image => image.posts, {
        cascade: ["update"]
    })
    @JoinTable()
    images: PostImage[];

    // Cascade insert & update here means if there are new PostInformation instances
    // or an update to an existing one, they will be automatically inserted or updated
    // when you save this Post entity
    @ManyToMany(type => PostInformation, information => information.posts, {
        cascade: ["insert", "update"]
    })
    @JoinTable()
    informations: PostInformation[];
}
```

### 2.@joincolumn options

@JoinColumn not only defines which side of the relation contains the join column with a foreign key, but also allows you to customize join column name and referenced column name.

```TypeScript
@ManyToOne(type => Category)
@JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
category: Category;
```

[Read more...](https://typeorm.io/#/relations/joincolumn-options)

### 3.@JoinTable options

@JoinTable is used for many-to-many relations and describes join columns of the "junction" table. A junction table is a special separate table created automatically by TypeORM with columns that refer to the related entities. You can change column names inside junction tables and their referenced columns with @JoinColumn: You can also change the name of the generated "junction" table.

```TypeScript
@ManyToMany(type => Category)
@JoinTable({
    name: "question_categories", // table name for the junction table of this relation
    joinColumn: {
        name: "question",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "category",
        referencedColumnName: "id"
    }
})
categories: Category[];
```
