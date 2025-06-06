import { Router } from "express";
import { newUser, fetchUser, fetchUsers } from "../Controller/userController.js";

const router = Router();

router.post('/',newUser);
router.get('/',fetchUsers);
router.get('/:id',fetchUser);

export default router;