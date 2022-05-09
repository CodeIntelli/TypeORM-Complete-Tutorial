import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { customer,auth } from "./routes/";
import cors from "cors";
import { Customer } from "./entity/Customer";
import { User } from "./entity/User";
import "reflect-metadata";
import cookieParser from "cookie-parser";
import {
    TYPEORM_CONNECTION, TYPEORM_HOST, TYPEORM_DATABASE, TYPEORM_USER, TYPEORM_PASSWORD,
    TYPEORM_DBPORT, TYPEORM_PORT, TYPEORM_SYNCHRONIZE, TYPEORM_LOGGING
} from "./config";
const app = express();
const port = TYPEORM_PORT || 2024;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/customer/",customer);
app.use("/auth/", auth);


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})

//@ts-ignore
createConnection({
    "type": TYPEORM_CONNECTION,
    "host": TYPEORM_HOST,
    "port": TYPEORM_DBPORT,
    "username": TYPEORM_USER,
    "password":TYPEORM_PASSWORD,
    "database": TYPEORM_DATABASE, 
    "logging": TYPEORM_LOGGING,
    "synchronize": TYPEORM_SYNCHRONIZE,
    "entities": [
        Customer,
        User
    ]
})
.then(() => {
console.log("database connected");
})   
.catch((error) => {
    console.log("database error", error)
});

