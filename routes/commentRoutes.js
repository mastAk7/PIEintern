import { Router } from "express";
import { createComment } from "../Controller/commentController.js";

const router = Router();

router.post('/',createComment);

export default router;