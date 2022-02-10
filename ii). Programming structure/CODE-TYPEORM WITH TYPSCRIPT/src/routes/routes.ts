import express from "express"
const router = express.Router();
import { Userdata } from "../controller/user";

router.get("/home", Userdata)
export {
    router
}