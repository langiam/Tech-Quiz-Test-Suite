describe('Tech Quiz App - End-to-End Test (Python Questions)', () => {
  beforeEach(() => {
    // Intercept API and stub with fixture
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    cy.visit('http://localhost:3000');
    cy.wait('@getQuestions');
  });

  it('starts quiz, answers all questions, and shows score', () => {
    // Click "Start Quiz"
    cy.contains('Start Quiz').click();

    // Answer all 10 questions
    for (let i = 0; i < 10; i++) {
      cy.get('.question').should('exist');
      cy.get('button').contains(/.+/).first().click(); // Click first answer
    }

    // Confirm score appears
    cy.contains(/Your score is/i).should('exist');

    // Click "Start New Quiz"
    cy.contains('Start New Quiz').click();

    // Verify it resets
    cy.get('.question').should('exist');
  });
});
