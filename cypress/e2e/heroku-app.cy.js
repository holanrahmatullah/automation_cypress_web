// const base_url = Cypress.env('BASE_URL_THE_INTERNET_HEROKU');

// describe('Test Postive Case The Internet Heroku APP', () => {
    
//   it('Login Page', () => {
//     cy.viewport(1280, 800);
//     cy.visit(`${base_url}/login`);
//     cy.url().should('eq', `${base_url}/login`);
//     cy.get('h2').should('have.text', 'Login Page');
//     cy.get('.subheader').should('have.text', 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
//     cy.get(':nth-child(1) > .large-6 > label').should('have.prop', 'tagName', 'LABEL');
//     cy.get(':nth-child(1) > .large-6 > label').should('have.text', 'Username');
//     cy.get(':nth-child(2) > .large-6 > label').should('have.prop', 'tagName', 'LABEL');
//     cy.get(':nth-child(2) > .large-6 > label').should('have.text', 'Password');
//     cy.get('#username').type('tomsmith');
//     cy.get('#password').type('SuperSecretPassword!');
//     cy.get('.fa').click();
//     cy.get('#flash').should('contain.text', 'You logged into a secure area!');
//     cy.get('h2').should('contain.text', 'Secure Area');
//     cy.get('.subheader').should('contain.text','Welcome to the Secure Area. When you are done click logout below');
//     cy.get('.button').should('exist');
//   });

// });