const base_url = Cypress.env('BASE_URL');

describe('Login Page', () => {
  it('Success Login with Valid Email  dan Password ', () => {
    cy.viewport(1280, 800);
    cy.visit(base_url);
    cy.url().should('eq', base_url);
    cy.get('div#navbar-collapse-1 li:nth-child(7) > a').click('');
    cy.get('h1 > span').contains('Masuk');
    cy.get('h1 > span').should('have.text', 'Masuk');
    cy.get('input#email').type('holanrahmatullah@gmail.com');
    cy.get('input#password').type('Warouw1945@');
    cy.get('#buttonLoginTrack').click();
    cy.get('.logo-name').should('exist');

  });

});