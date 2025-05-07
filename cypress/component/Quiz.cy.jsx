import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz'; // Adjust path if needed
import questions from '../fixtures/questions.json';

describe('Quiz Component - All Curriculum-Based Questions', () => {
    questions.forEach((q, index) => {
      it(`renders question ${index + 1}: "${q.question}"`, () => {
        mount(<Quiz question={q} />);
        cy.contains(q.question);
        q.options.forEach(option => cy.contains(option));
      });
    });
  });