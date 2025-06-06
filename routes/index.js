import { Router } from "express";
import postRoutes from './postRoutes.js'
import commentRoutes from './commentRoutes.js'
import getRoutes from './getRoutes.js'
import userRoutes from './userRoutes.js'

const router = Router();

router.use('/', postRoutes)
router.use('/', getRoutes)
router.use('/comment', commentRoutes)
router.use('/user', userRoutes)

export default router;