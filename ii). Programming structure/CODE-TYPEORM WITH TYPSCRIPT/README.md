<!-- @format -->

STEP-1 (installtion)

1. npm init --y
2. sudo apt install node-typescript
3. tsc --init
4. npm i express @types/express nodemon ts-node @types/node typescript
5. npm i mysql2 typeorm reflect-metadata

reflect-metadata => Allows you to do runtime reflection on types

STEP-2 (database connection)

OPTION-1

1. create ormconfig.json file and take a required option(follow ormconfig.json file)
2. create app.ts file in folder[src/app.ts] (it's require for run server in specific port also check in browser path)

OPTION-2
(CONNECTION USING ORMCONFIG.JSON FILE)

STEP-3 (make entity)

OPTION-1

1. create user entiy and define column (src/entity/user.ts)

OPTION-2
Entity inheritace

1. concrete table inheritace make a conetnt copy.ts file like [category,subcategory,product],[src/entity/content copy.ts]
2. single table inheritance using childenity make a conetent.ts file [src/entity/content.ts]

STEP-4 (Make EntitySchema)

1. Create entityschema foldern and make a category file [src/entitySchema/category.ts]

STEP-5 (make CRUD using entitymanage)

1. Make routes folder and create routes.ts file [src/routes/routes.ts]
2. make controller folder in controller.ts file [src/controller/userController.ts]

STEP-7 (make CRUD using repository)

2. make controller folder in controller.ts file [src/controller/userController.ts]

STEP-8 (make CRUD using find query)

2. make controller folder in controller.ts file [src/controller/userController.ts]

STEP-9 Custome Repository

2. make controller folder in controller.ts file [src/repo/Userrepository.ts]

STEP-10 one to one realtion
