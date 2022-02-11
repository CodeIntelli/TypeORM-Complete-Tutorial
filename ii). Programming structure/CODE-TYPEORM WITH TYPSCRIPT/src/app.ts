import express, { Request, Response } from "express";
import { createConnection, Connection } from 'typeorm';
import "reflect-metadata";
import { User } from "./entity/User";
import { router } from "./routes/routes";
const app = express();
const port = 2024;

app.use(express.json());

// db connect OPTION-1
createConnection({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "Typeorm_CRUD", 
    "logging": false,
    "synchronize": true,
    // "entities":[User],
    "entities": [
        // 1. /* directly entity name here */ User
        // /* 2. simple entity sync at that application run time */"src/entity/*.ts"
        // /* 3. entity schema */"src/entitySchema/*.ts",
        /* irefirehfoirehfoierf 4. entity relation */ "src/entityrelatoion/*.ts"
    ]
})
.then(() => {
console.log("database connected");
})   
.catch((error) => {
    console.log("database error", error)
});

// db connect OPTION-2 MAKE A ORMCONFIG.JSON FILE
// createConnection().then(() => {
// console.log("database connected");
// })   
// .catch((error) => {
//     console.log("database error", error)
// });

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