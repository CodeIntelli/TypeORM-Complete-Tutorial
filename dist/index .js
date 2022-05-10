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
(0, typeorm_1.createConnection)();
// middleware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(user_route_1.default);
app.listen(2020);
console.log("server is running", 2020);
