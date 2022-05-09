import express, { Request, Response,NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import jwt from "jsonwebtoken";
import {Jwtservice} from "../../util/JWTService"

const Login = async (req: Request, res: Response, next: NextFunction) => {
    // destructure variable 
    const { email, password } = req.body;
        
    // both are empty validation
    if (!(email && password))
    {
        res.status(400).json({
            message:"require email and password"
        });
    }

    // login logic is here 
    try {
        // check user is exist
        const user = await getRepository(User).findOne({ email: email });
        if (!user)
        {
            return res.status(400).json({
                message:"incorrect emailid"
            });    
        }

        // compare password in db  
        if (!user?.isValidPassword(password))
        {
            return res.status(401).json({
                message:"incorrect password"
            }); 
        }

        // generate token
		let generate_token = Jwtservice.sign({email:email});

        // store token in cookies 
        return res.cookie('access_token', generate_token, {
            httpOnly: true,
            expires: new Date(Date.now() + 900000),
        }).status(200).json({
            access_token: generate_token,
            message : "user is login succesfully"
        });
    }catch (err)
    {
       return next(err) 
    }
}

export default Login;
