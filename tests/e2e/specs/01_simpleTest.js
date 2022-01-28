// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h2", "Welcome to the ABOUT YOU Vue.js challenge");
    // set using value 10
    cy.get('select').select('10');
    // confirm the selected value
    cy.get('select').should('have.value', '10');
    // testing new url
    cy.url().should('contain', '/showdata');
    // wait 3 seconds and test if you received data in a table with lenght > 1
    cy.wait(3000); 
    cy.get('table').find('tr').its('length').should('be.gt', 1);
    // check if there are 5 th in the table and their own text
    cy.get('table').find('th').its('length').should('be', 5);
    cy.get('table').find('th').eq(0).should('contain.text', 'Sensor');
    cy.get('table').find('th').eq(1).should('contain.text', 'Temperature');
    cy.get('table').find('th').eq(2).should('contain.text', 'Pressure');
    cy.get('table').find('th').eq(3).should('contain.text', 'Humidity');
    cy.get('table').find('th').eq(4).should('contain.text', 'PM10');
  });
});
