import express from 'express';
import { getRandomQuestions } from '../../controllers/questionController.js';

const router = express.Router();

router.get('/random', getRandomQuestions);

export default router;
