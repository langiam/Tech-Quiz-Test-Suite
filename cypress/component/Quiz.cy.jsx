import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz'; // Adjust path if needed

const questions = [
  {
    question: "Which HTML element is used to define important text?",
    options: ["<important>", "<em>", "<strong>", "<highlight>"],
    correctAnswer: "<strong>"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-align", "font-size", "line-height"],
    correctAnswer: "font-size"
  },
  {
    question: "What is the correct syntax to reference an external JavaScript file?",
    options: ["<script src=\"script.js\">", "<javascript href=\"script.js\">", "<js link=\"script.js\">", "<script link=\"script.js\">"],
    correctAnswer: "<script src=\"script.js\">"
  },
  {
    question: "Which array method removes the last element in JavaScript?",
    options: ["shift()", "pop()", "splice()", "remove()"],
    correctAnswer: "pop()"
  },
  {
    question: "Which Node.js module is used to create a server?",
    options: ["url", "express", "http", "fs"],
    correctAnswer: "http"
  },
  {
    question: "In SQL, what keyword is used to retrieve data from a table?",
    options: ["GET", "FETCH", "SELECT", "SHOW"],
    correctAnswer: "SELECT"
  },
  {
    question: "What does the acronym CRUD stand for in database operations?",
    options: ["Create, Read, Update, Destroy", "Connect, Retrieve, Update, Delete", "Create, Read, Update, Delete", "Compute, Read, Upload, Deploy"],
    correctAnswer: "Create, Read, Update, Delete"
  },
  {
    question: "Which hook is used in React to perform side effects?",
    options: ["useEffect()", "useState()", "useMemo()", "useReducer()"],
    correctAnswer: "useEffect()"
  },
  {
    question: "Which command initializes a new Git repository?",
    options: ["git init", "git start", "npm init git", "git install"],
    correctAnswer: "git init"
  },
  {
    question: "What is the purpose of useState in a React component?",
    options: ["To fetch data", "To manage DOM events", "To create routing", "To add and manage component state"],
    correctAnswer: "To add and manage component state"
  }
];

describe('Quiz Component - All Curriculum-Based Questions', () => {
  questions.forEach((q, index) => {
    it(`renders question ${index + 1}: "${q.question}"`, () => {
      mount(<Quiz question={q} />);
      cy.contains(q.question);
      q.options.forEach(option => cy.contains(option));
    });
  });
});
