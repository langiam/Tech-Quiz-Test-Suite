import { Router } from 'express';
import questionRoutes from './questionRoutes.js';

const router = Router();
router.use('/', questionRoutes);
export default router;
