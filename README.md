<!-- @format -->

# Boilerplate Restapi

## Following Structure

```
Main Folder
└───Config
    └───index.ts # Call all config Variable
└───src
    │   index.ts         # Application entry point
    └───controller
        └───index.ts # Call all controller in one file
        └───auth # Call all auth in controller file
            └───auth.ts
        └───customer.ts # user all controller/Logic
    └───Database
        └───index.ts # Database Config
    └───Middleware
        └───index.ts # All Middleware call from this file
        └───jwtverify.ts # Authentication middleware
    └───Models/entity
        └───index.ts # All Models call from this file
        └───customer.ts # Customer Model
        └───user.ts # user Model
    └───Routes
        └───index.ts # All Routes call from this file
        └───customer.ts # All Customer Routes
        └───auth.ts # All User Authentication Routes
    └───Utils/Services
        └───index.ts # All Services call from this file
        └───JWTService.ts # jwttoken generate
└───config.env # Secret environment Variables
```

## Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

### Step 2:- Download VSCode

Download [VSCode](https://code.visualstudio.com/)

### Step 3: Configuration & Install Packages

- Primary, You need to install both

```TypeScript

npm install -g typescript
npm install -g node-ts

```

- create config file using this two command

```TypeScript
npm init
tsc --init
```

### Internally Install

- Install all dependencies with `npm install`

### Running in dev mode

- Run `npm run dev`
- The server address will be displayed to you as `http://0.0.0.0:2024`

### Externally Install

- After this you need to install some package in your project file

```TypeScript
npm i bcrypt body-parser cookie-parser cors@2.8.5 dotenv express jsonwebtoke ts-node
```

- After this you need to install some Dev Dependencies in your project file

```TypeScript
npm i @types/bcrypt @types/body-parser @types/cookie-parser @types/cors @types/dotenv @types/express  @types/jsonwebtoken @types/mysql typescript
```

- Add this in your package.json File after License Field

```TypeScript
"scripts": {
     "start": "ts-node src/index.ts",
    "dev": "nodemon --exec ts-node src/index.ts"
  },
```

## Package Information

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [ts-node](https://www.npmjs.com/package/ts-node)

## Let's start a Project

#### **STEP-1: INSTALLATION**

- `1. npm init --y`

- `2. sudo apt install node-typescript`

- `3. tsc --init`

- `4. sudo npm install typescript ts-node`

- `5. npm i typescript -g, npm i mysql2 express jsonwebtoken express cors nodemon bcryptjs body-parser class-validator reflect-metadata ts-node typeorm`

- `6. npm i @types/typescript @types/bcrypt @types/body-parser @types/jsonwebtoken @types/cors @types/express @types/node`

### **STEP-2: DATABASE CONNECTION**

### using .env file

- (CONNECTION USING .ENV FILE) [foldername/.env]

## [customer crud]

#### **STEP-3: MAKE ENITITY**

#### `create`

- create customer entiy and define column (src/entity/customer.ts)

#### **STEP-3: MAKE main.ts file**

- create main.ts file for createconnection and control routes (src/index.ts)

#### **STEP-4: Controller**

#### `create controller`

- make controller folder in controller.ts file [src/controller/Customer.ts]

#### **STEP-5: Routes**

#### `create Routes`

- Make routes folder and create routes.ts file [src/routes/customer.ts]
