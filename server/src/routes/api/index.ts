import { Router } from 'express';
import questionRoutes from './questionRoutes';

const router = Router();

router.use('/', questionRoutes); // handles /questions and /random

export default router;
