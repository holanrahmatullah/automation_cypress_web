import 'cypress-dotenv'; 
const base_url = Cypress.env('BASE_URL');
const username_user = Cypress.env('USERNAME_USER');
const password_user = Cypress.env('PASSWORD_USER');


Cypress.Commands.add('clickHeaderHomePage', (element) =>{
    cy.get(element).click();
});
Cypress.Commands.add('clickLogin', (element) =>{
    cy.viewport(1280, 800);
    cy.visit(element);
    cy.url().should('eq', base_url);
    cy.get('div#navbar-collapse-1 li:nth-child(7) > a').click('');
    cy.get('h1 > span').contains('Masuk');
    cy.get('h1 > span').should('have.text', 'Masuk');
    cy.get('input#email').type(username_user);
    cy.get('input#password').type(password_user);
    cy.get('#buttonLoginTrack').click();
    cy.get('div#navbar-collapse-1 a > i').should('exist');
});

