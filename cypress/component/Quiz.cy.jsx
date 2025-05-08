import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz'; // Adjust path if needed
import questions from '../fixtures/questions.json';

describe('Quiz Component - Python Questions', () => {
  questions.forEach((q, index) => {
    it(`renders Python question ${index + 1}: "${q.question}"`, () => {
      // mount a quiz with a single question
      mount(<Quiz question={q} />);

      // confirm question text is present
      cy.contains(q.question);

      // confirm each answer option appears
      q.answers.forEach(answer => {
        cy.contains(answer.text);
      });
    });
  });
});
