import { Router } from 'express';
import questionRoutes from './questionRoutes.js';

const router = Router();

// Fix: mount under /questions so you get /api/questions/random
router.use('/questions', questionRoutes);

export default router;