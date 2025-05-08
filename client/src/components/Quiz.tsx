import React, { useState, useEffect } from 'react';
import { getQuestions } from '../services/questionApi.ts';
import type { IQuestion } from '../models/Question.ts';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load quiz questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizStarted(false);
    setQuizFinished(false);
  };

  if (loading) return <div>Loading...</div>;
  if (!quizStarted)
    return <button onClick={() => setQuizStarted(true)}>Start Quiz</button>;

  if (quizFinished)
    return (
      <div>
        <h2>Your score is {score} / {questions.length}</h2>
        <button onClick={handleRestart}>Start New Quiz</button>
      </div>
    );

const currentQuestion = questions[currentQuestionIndex];
if (!currentQuestion) return <div>No questions available.</div>;

  return (
    <div>
      <h4 className="question">{currentQuestion.question}</h4>
      {currentQuestion.answers.map(
        (answer: { text: string; isCorrect: boolean }, index: number) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <button
              className="btn btn-primary"
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              {index + 1}
            </button>
            <div className="alert alert-secondary mb-0 ms-2 flex-grow-1">
              {answer.text}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
