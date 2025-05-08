import type { IQuestion } from '../models/Question.ts';

export const getQuestions = async (): Promise<IQuestion[]> => {
  try {
    const response = await fetch('/api/questions/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: IQuestion[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};
