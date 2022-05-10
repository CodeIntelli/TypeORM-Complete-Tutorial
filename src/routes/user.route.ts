import { Router } from "express";
const router = Router();
import { getUsers, cretaeUser, getUserById, updateUser, deleteUser } from "../controllers/user.controller";

router.get("/users", getUsers);
router.post("/users", cretaeUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;