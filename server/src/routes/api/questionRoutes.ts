import express from 'express';
const router = express.Router();
import {
  getRandomQuestions
} from '../../controllers/questionController.js';

router.route('/random').get(getRandomQuestions);

// New route to support frontend expectation
router.route('/api/questions').get(getRandomQuestions);

export default router;
