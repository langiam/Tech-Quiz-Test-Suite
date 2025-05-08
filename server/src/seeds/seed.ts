import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { Question } from '../models/Question.js';
import pythonQuestions from './pythonQuestions.js';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('❌ MONGODB_URI is not set in .env');
}

const seed = async () => {
  try {
    await mongoose.connect(uri);
    await Question.deleteMany();
    await Question.insertMany(pythonQuestions);
    console.log('✅ Seeded Python questions!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seed();
