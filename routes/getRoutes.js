import { Router } from "express";
import { fetchVideos } from "../Controller/getController.js";

const router = Router();

router.get('/',fetchVideos);

export default router;