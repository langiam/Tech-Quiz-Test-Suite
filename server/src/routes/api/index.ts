import { Router } from 'express';
import questionRoutes from './questionRoutes.js'; // ✅ must use `.js`!

const router = Router();
router.use('/', questionRoutes);
export default router;
