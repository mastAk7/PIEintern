import { Router } from "express";
import { createVideo } from "../Controller/postController.js";

const router = Router();

router.post('/',createVideo);

export default router;