/// <reference types="cypress" />
describe('page', () => {
  it('visits successfully', () => {
    const username = 'myusername@ibm.com';
    cy.visit('https://login.ibm.com/')
      .get('#username')
      .type(username)
      .should('have.value', username);
  });

  it('should also visit successfully but doesn\'t', () => {
    const args = { username: 'myusername@ibm.com' };
    cy.origin('https://login.ibm.com/', { args }, ({ username }) => {
      cy.visit('https://login.ibm.com/') // Fails saying page never loaded
        .get('#username')
        .type(username)
        .should('have.value', username);
    });
  });
})
