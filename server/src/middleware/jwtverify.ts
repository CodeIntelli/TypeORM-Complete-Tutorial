import express, { Request, Response, NextFunction} from "express";
import {Jwtservice} from '../util/JWTService';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
	const settoken = req.headers.authorization;
	if (!settoken) {
		return res.status(403).send({
			status: 1,
			message: 'un authorized',
		});
	}
	try {
		const email = await Jwtservice.verify(settoken);
        const user = email as String;
		req.body = user;
		return next();
	} catch (err) {
		res.json({
			statusCode: 403,
			message: 'un authorized',
		});
	}
};

export default authenticate;
