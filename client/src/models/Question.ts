export interface IQuestion {
  _id: string;
  question: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
}
