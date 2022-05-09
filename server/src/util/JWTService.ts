import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const privateKey = JWT_SECRET as string;

export class Jwtservice {
    static sign(payload: Object, expiry = '8000s', secret = privateKey) {
		return jwt.sign(payload, secret, { expiresIn: expiry });
    }
    static verify(token:string, secret = privateKey) {
		return jwt.verify(token, secret);
	}
}