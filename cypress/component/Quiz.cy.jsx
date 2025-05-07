describe('Tech Quiz App - End-to-End Test', () => {
    it('starts quiz, answers all questions, and shows score', () => {
      cy.visit('http://localhost:3000');
  
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('.question').should('exist');
  
        // Click a visible answer button (you can randomize if preferred)
        cy.get('button.answer-button').first().click();
      }
  
      cy.contains(/Your score is/i).should('exist');
      cy.contains('Start New Quiz').click();
  
      // Confirm quiz reset
      cy.get('.question').should('exist');
    });
  });
  