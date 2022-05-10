import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

// get all user data
// export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<response> => {
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    
    // based on try catch
    try {
        const users = await getRepository(User).find();
        return res.json(users);
    } catch (err) {
        return next(err);
    }
    // based on promise function
    // const users = await getRepository(User).find();
    // return res.json(users);
}

// create a new User
export const cretaeUser = async (req:Request, res:Response): Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const result = await getRepository(User).save(newUser);
    return res.json(result);
}

// get a particular user
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const result = await getRepository(User).findOne(id);
        if (!result) {
            res.json({
                statusCode: 403,
                message: "not found",
            });            
        }
        return res.json(result);
    } catch (err) {
        return next(err);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const user = await getRepository(User).findOne(id);
        if (user) {
            getRepository(User).merge(user, req.body);
            const result = await getRepository(User).save(user);
            return res.json({
                statusCode: 200,
                message: "User update",
                data:result
            })
        }
        else {
            res.json({
                statusCode: 404,
                message: "not found",
            });            
        }
    } catch (err) {
        return next(err);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const user = await getRepository(User).findOne(id);
        if (!user) {
            res.json({
                statusCode: 404,
                message: "not found",
            });  
        }
        const result = await getRepository(User).delete(id);
        return res.json({
            message: "user delete",
            data:result
        })
               
    } catch (err) {
        return next(err);
    }
}

