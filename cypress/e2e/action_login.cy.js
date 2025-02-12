const base_url = Cypress.env('BASE_URL');
const username_user = Cypress.env('USERNAME_USER');
const password_user = Cypress.env('PASSWORD_USER');

describe('Login Page', () => {
  it('Success Login with Valid Email  dan Password ', () => {
    cy.viewport(1280, 800);
    cy.visit(base_url);
    cy.url().should('eq', base_url);
    cy.log(`${base_url} Testing Holan`);
    cy.get('#navbar-collapse-1 > .nav > [style="width: max-content;font-size:16px;"] > a').click('');
    cy.get('h1 > span').contains('Masuk');
    cy.get('h1 > span').should('have.text', 'Masuk');
    cy.get('input#email').type(username_user);
    cy.get('input#password').type(password_user);
    cy.get('#buttonLoginTrack').click();
    cy.get('.logo-name').should('exist');

  });

});