import express from 'express';
import { getRandomQuestions } from '../../controllers/questionController.js'; // ✅ make sure this is correct

const router = express.Router();

router.get('/questions', getRandomQuestions);

export default router;
