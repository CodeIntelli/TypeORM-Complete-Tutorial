<!-- @format -->

## Practical Structure

### How to we are going on programming side

#### **STEP-1: INSTALLATION**

#### `1. npm init --y`

#### `2. sudo apt install node-typescript`

#### `3. tsc --init`

#### `4. npm i express @types/express nodemon ts-node @types/node typescript`

#### `5. npm i mysql2 typeorm reflect-metadata`

#### **STEP-2: DATABASE CONNECTION**

#### `OPTION-1`

    1. create ormconfig.json file and take a required option(follow ormconfig.json file)
    2. create app.ts file in folder[src/app.ts] (it's require for run server in specific port also check in browser path)

#### `OPTION-2`

    1. (CONNECTION USING ORMCONFIG.JSON OR ORMCONFIG.TS FILE) [foldername/ormconfig.json Or ormconfig.ts]

#### `OPTION-3`

    1. (CONNECTION USING .ENV FILE) [foldername/.env]

#### **STEP-3: MAKE ENITITY**

#### `OPTION-1`

    1. create user entiy and define column (src/entity/user.ts)

#### `OPTION-2 [Entity inheritace]`

    1. concrete table inheritace make a conetnt copy.ts file like [category,subcategory,product],[src/entity/content copy.ts]
    2. single table inheritance using childenity make a conetent.ts file [src/entity/content.ts]

#### **STEP-4: MAKE ENITITYSCHEMA**

#### `OPTION-1`

    1. Create entityschema foldern and make a category file [src/entitySchema/category.ts]

#### **STEP-5: MAKE CRUD USING ENTITYMANAGER**

#### `OPTION-1`

    1. Make routes folder and create routes.ts file [src/routes/routes.ts]
    2. make controller folder in controller.ts file [src/controller/userController.ts]

#### **STEP-6: MAKE CRUD USING REPOSITORY**

#### `OPTION-1`

    1. make controller folder in controller.ts file [src/controller/userController.ts]

#### **STEP-7: MAKE CRUD USING FINDQUERY**

#### `OPTION-1`

    1. make controller folder in controller.ts file [src/controller/userController.ts]

#### **STEP-8: MAKE CRUD USING CUSTOMREPOSITORY**

#### `OPTION-1`

    1. make controller folder in controller.ts file [src/repo/Userrepository.ts]

#### **STEP-9: ONE TO ONE RELATION**

#### `OPTION-1`

    1. you have two entity
        (table:employee = id,name,department_id [src/entityrelation/employee.ts]
        table:department = id,name,path) [src/entityrelation/department.ts]

    In that means one department have many employee

#### **STEP-10: ONE TO MANY RELATION**

#### `OPTION-1`

    1. you have two entity
        (table:student = id,name [src/entityrelation/student.ts]
        table:photo = id,url,stude_id) [src/entityrelation/photo.ts]

    In that means one student have many photo

#### **STEP-11: MANY TO MANY RELATION**

#### `OPTION-1`

    1. you have two entity
        (table:question = id,title,option [src/entityrelation/question.ts]
        table:game = id,name) [src/entityrelation/game.ts]

    In that means one game have many question
    also In that means one question have many game

#### **STEP-12: QUERY BUILDER**

#### `OPTION-1`

    1. make controller folder in controller.ts file [src/controller/userController.ts]

#### **STEP-13: MIGRATION**

#### `OPTION-1`

    1. make controller folder in controller.ts file [src/controller/userController.ts]

[watch videos](https://youtube.com/playlist?list=PLolI8AY2AS9aNM8SScV0Jh-it4KUHsAgU)
