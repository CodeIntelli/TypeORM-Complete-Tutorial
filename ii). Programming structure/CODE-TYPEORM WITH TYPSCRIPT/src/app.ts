import express, { Request, Response } from "express";
import { createConnection } from 'typeorm';
import "reflect-metadata";
import { User } from "./entity/User";
import { router } from "./routes/routes";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.TYPEORM_PORT;

app.use(express.json());

// db connect OPTION-1
// createConnection({
//     "type": "mysql",
//     "host": "localhost",
//     "port": 3306,
//     "username": "root",
//     "password": "",
//     "database": "Typeorm_CRUD", 
//     "logging": false,
//     "synchronize": true,
//     // "entities":[User],
//     "entities": [
//         // 1. /* directly entity name here */ User
//         /* 2. simple entity sync at that application run time */"src/entity/*.ts"
//         // /* 3. entity schema */"src/entitySchema/*.ts",
//         // /* irefirehfoirehfoierf 4. entity relation */ "src/entityrelatoion/*.ts"
//     ]
// })
// .then(() => {
// console.log("database connected");
// })   
// .catch((error) => {
//     console.log("database error", error)
// });

// db connect OPTION-2 MAKE A ORMCONFIG.JSON FILE
/* createConnection().then(() => {
console.log("database connected throgh ormconfig.json file");
})   
.catch((error) => {
    console.log("database error", error)
}); */


// db connect OPTION-3 make a env file
//@ts-ignore
createConnection({
    "type": process.env.TYPEORM_CONNECTION,
    "host": process.env.TYPEORM_HOST,
    "port": process.env.TYPEORM_DBPORT,
    "username": process.env.TYPEORM_USER,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE, 
    "logging": process.env.TYPEORM_LOGGING,
    "synchronize": process.env.TYPEORM_SYNCHRONIZE,
    "entities": [
       "src/entity/*.ts"
    ]
})
.then(() => {
console.log("database connected");
})   
.catch((error) => {
    console.log("database error", error)
});

app.use('/',router)

// get path and run in browser
app.get("/", (req: Request, res: Response,) => {
    res.json({
        data: "done",
    });
})

// start a serve in this port
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
})