"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const typeorm_1 = require("typeorm");
const app = (0, express_1.default)();
const port = 2020;
// mysql through db connection
(0, typeorm_1.createConnection)();
// middleware
// CORS is really useful when you're offering a public API and would like to controll the access to certain resources and how people use them.
app.use((0, cors_1.default)());
// It proves to be very helpful while debugging and also if you want to create Log files. 
app.use((0, morgan_1.default)('dev'));
// is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(express_1.default.json());
// router method take in one varible
app.use(user_route_1.default);
// listen a port number
app.listen(port);
console.log(`server is running ${port}`);
