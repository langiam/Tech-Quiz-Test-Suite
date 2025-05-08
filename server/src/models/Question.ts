import { Schema, model, type Document } from 'mongoose';

interface IAnswer {
  text: string;
  isCorrect: boolean;
}

interface IQuestion extends Document {
  question: string;
  answers: IAnswer[];
}

const answerSchema = new Schema<IAnswer>({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }
});

const questionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  answers: { type: [answerSchema], required: true }
});

const Question = model<IQuestion>('Question', questionSchema);
export type { IQuestion };
export { Question };
