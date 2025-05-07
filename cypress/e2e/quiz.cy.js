describe('Tech Quiz App - End-to-End Test', () => {
    it('starts quiz, answers all questions, and shows score', () => {
      cy.visit('http://localhost:3000'); // Change port if your client uses something else
  
      // Click start
      cy.contains('Start Quiz').click();
  
      // Answer 10 questions
      for (let i = 0; i < 10; i++) {
        cy.get('.question').should('exist'); // Optional: use more specific selector if needed
        cy.get('button').first().click(); // Click first option
      }
  
      // Check that final score appears
      cy.contains('Your score is').should('exist');
  
      // Start new quiz
      cy.contains('Start New Quiz').click();
  
      // Confirm it goes back to question 1 or the start state
      cy.get('.question, button').should('exist');
    });
  });
  