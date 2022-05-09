import { Router } from "express";
import Customercontroller from "../controller/Customer";

import authenticate from "../middleware/jwtverify";
const router = Router();

router.post("/",Customercontroller.createCustomer);
router.get("/", Customercontroller.getCustomer)
router.get("/:id",authenticate, Customercontroller.getCustomerById)
router.put("/:id", Customercontroller.updateCustomer)
router.delete("/:id", Customercontroller.deleteCustomer)

export default router;