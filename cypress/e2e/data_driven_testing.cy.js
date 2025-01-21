const dataTest = require('../const/data_test.json');
const base_url = Cypress.env('BASE_URL');

describe('Testing With Data Driven Testing', () => {
  
  dataTest.invalid_login.forEach(data => {
    it(`Invalid with email=${data.email} dengan password=${data.password}`, () => {
      cy.viewport('macbook-15');
      cy.visit(base_url);
      cy.get('#navbar-collapse-1 > .nav > [style="width: max-content;font-size:16px;"]').click();
      cy.get('#email').type(data.email);
      cy.get('#password').type(data.password);
      cy.get('#buttonLoginTrack').click();
      cy.get('#navbar-collapse-1 > .nav > [style="width: max-content;font-size:16px;"]').should('be.visible');
    });
  });

  it('Log all environment variables', () => {
    console.log(Cypress.env()); // Logs all environment variables to the browser's console
    cy.log(Cypress.env());
  });

  it('Data Driven testing with fixtures', () => {
    cy.fixture('loginData').then((data) => {
      data.forEach(userData => {
        cy.viewport(1280, 800);
        cy.visit(base_url);
        cy.url().should('eq', base_url);
        cy.get('div#navbar-collapse-1 li:nth-child(7) > a').click('');
        cy.get('h1 > span').contains('Masuk');
        cy.get('h1 > span').should('have.text', 'Masuk'); // asertation
        cy.get('input#email').type(userData.email);
        cy.get('input#password').type(userData.password);
        cy.get('#buttonLoginTrack').click();
        cy.get('span > small').should('have.text', 'Email atau kata sandi salah');
      });
    });
  });
  

});