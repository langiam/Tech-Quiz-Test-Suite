import type { Answer } from './Answer.js';

export interface IQuestion {
  _id: string;
  question: string;
  answers: Answer[];
}
