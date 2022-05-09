import express, { Request, Response,NextFunction } from "express";
import { register } from "ts-node";
import { Any, getRepository } from "typeorm";
import { User } from "../../entity/User";

const Register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        let user = new User();
        user.name = name;
        user.email = email;

        // bcryptpassword
        user.password = user.setPassword(password);

        // email is exist or not in db 
        const emailExist = await getRepository(User).findOne({ email : email });
        if (emailExist)
        {
            res.status(400).json({
                message:"email is exist"
            });    
        }

        const userRepo = await getRepository(User);
        await userRepo.save(user);
        res.json({
            statusCode: 200,
            message: "user register"
        })
    }
    catch (err)
    {
       return next(err) 
    }   
}
export default Register;