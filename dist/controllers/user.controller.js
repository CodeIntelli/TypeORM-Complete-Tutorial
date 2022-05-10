"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.cretaeUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
// get all user data
// export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<response> => {
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // based on try catch
    try {
        const users = yield (0, typeorm_1.getRepository)(User_1.User).find();
        return res.json(users);
    }
    catch (err) {
        return next(err);
    }
    // based on promise function
    // const users = await getRepository(User).find();
    // return res.json(users);
});
exports.getUsers = getUsers;
// create a new User
const cretaeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = (0, typeorm_1.getRepository)(User_1.User).create(req.body);
    const result = yield (0, typeorm_1.getRepository)(User_1.User).save(newUser);
    return res.json(result);
});
exports.cretaeUser = cretaeUser;
// get a particular user
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield (0, typeorm_1.getRepository)(User_1.User).findOne(id);
        if (!result) {
            res.json({
                statusCode: 403,
                message: "not found",
            });
        }
        return res.json(result);
    }
    catch (err) {
        return next(err);
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield (0, typeorm_1.getRepository)(User_1.User).findOne(id);
        if (user) {
            (0, typeorm_1.getRepository)(User_1.User).merge(user, req.body);
            const result = yield (0, typeorm_1.getRepository)(User_1.User).save(user);
            return res.json({
                statusCode: 200,
                message: "User update",
                data: result
            });
        }
        else {
            res.json({
                statusCode: 404,
                message: "not found",
            });
        }
    }
    catch (err) {
        return next(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield (0, typeorm_1.getRepository)(User_1.User).findOne(id);
        if (!user) {
            res.json({
                statusCode: 404,
                message: "not found",
            });
        }
        const result = yield (0, typeorm_1.getRepository)(User_1.User).delete(id);
        return res.json({
            message: "user delete",
            data: result
        });
    }
    catch (err) {
        return next(err);
    }
});
exports.deleteUser = deleteUser;
