describe('Tech Quiz App - End-to-End Test', () => {
    it('starts quiz, answers all questions, and shows score', () => {
      cy.visit('http://localhost:3000');
  
      // Click "Start Quiz"
      cy.contains('Start Quiz').click();
  
      // Answer 10 questions
      for (let i = 0; i < 10; i++) {
        cy.get('.question').should('exist');
  
        // Select a visible answer button (adjust selector as needed)
        cy.get('button').contains(/.+/).first().click();
      }
  
      // Verify score screen appears
      cy.contains(/Your score is/i).should('exist');
  
      // Restart quiz
      cy.contains('Start New Quiz').click();
  
      // Confirm it resets
      cy.get('.question, button').should('exist');
    });
  });
  