const base_url = Cypress.env('BASE_URL');

describe('Login Test', () => {
  it('Invalid Login With assertation tool tip', () => {
    cy.viewport(1280, 800);
    cy.visit(base_url);
    cy.get(':nth-child(7) > form > .buttonBanner').click();
    cy.get('#name').type('testing');
    cy.get(':nth-child(3) > .col-md-8 > .form-control')
      .type('04-Aug-1969')
      .type('{enter}');
    // cy.get(':nth-child(4) > .col-md-4').trigger('mouseover')
    // cy.get('.active').click()
    cy.get('#email').type('asdhkasndajas@yopmail.com');
    cy.get('#whatsapp').type('082285974099');

    cy.get('#password').type('wa@');
    cy.get('#password-confirm').type('wa@');
    cy.get('#inlineCheckbox1').click();
    cy.get('#buttonRegisterTrack').click();
    cy.wait(500);
    cy.get(':nth-child(6) > .col-md-8 > .invalid-feedback > small').should('be.visible').invoke('text').then((text) => {
      cy.log('ini==>>>', text);
      expect(text).to.equal('Kata sandi minimal 8 karakter The password must be at least 8 characters.'); // Ganti dengan teks yang diharapkan
    });
    // cy.get(':nth-child(6) > .col-md-8 > .invalid-feedback > small').should('eq','The password must be at least 8 characters')
    cy.get('.form-group.row .col-md-8 .invalid-feedback > small')
      .first()
      .should(($small) => {
        expect($small.text()).to.match(/Kata sandi minimal 8 karakter\s*/);
      });

    // cy.get(':nth-child(8) > form > .buttonBanner').click()
  });


});