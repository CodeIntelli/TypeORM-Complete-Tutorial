import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.route";
import { createConnection } from "typeorm";

const app = express();
const port = 2020;

// mysql through db connection
createConnection();

// middleware

// CORS is really useful when you're offering a public API and would like to controll the access to certain resources and how people use them.
app.use(cors());

// It proves to be very helpful while debugging and also if you want to create Log files. 
app.use(morgan('dev'));

// is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(express.json());

// router method take in one varible
app.use(userRoutes);

// listen a port number
app.listen(port);

console.log(`server is running ${port}`);