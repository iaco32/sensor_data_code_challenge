// https://docs.cypress.io/api/introduction/api.html

describe("Choose different Radius", () => {
    it("Visits the app root url", () => {
      cy.visit("/");
      cy.contains("label", "Choose radius:");
      // set radius using value 5
      cy.get('select').select('5');
      // confirm the selected value
      cy.get('select').should('have.value', '5');
      // testing new url
      cy.url().should('contain', '/showdata');
      // wait 3 seconds and test if you received data in a table with lenght > 1
      cy.wait(3000);
      cy.get('table').find('tr').its('length').should('be.gt', 1);

      cy.wait(2000);
      // cy.contains("button", "Go back");
      // cy.get('button').click();
      cy.get('button').then(($btn) => {
        if ($btn.text().includes('back')) {
          cy.get($btn).click();
          cy.wait(1000);
          // go back and select a different radius
          cy.get('select').select('10');
          // confirm the selected value
          cy.get('select').should('have.value', '10');
        }
      })
    });
  });
  