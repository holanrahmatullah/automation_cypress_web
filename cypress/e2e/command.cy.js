const base_url = Cypress.env('BASE_URL');
describe('Testing With Command Tools', async ()=>{
    it('Call Command Test', async () => {
        cy.clickLogin(base_url);
    });

});
