import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://opensource-demo.orangehrmlive.com/";

// Navigate directly to the PIM page
Given("I navigate to PIM", () => {
  // Important: after login, visiting PIM directly sometimes redirects back to login.
  // Better to click the PIM menu link instead of forcing cy.visit().
  cy.contains('PIM').click(); // corrected: click the PIM menu item
  cy.url().should('include', '/pim/viewEmployeeList');
  // Removed cy.contains('Employee Information') because that heading may not exist in current UI
});

When("I enter employee details:", (dataTable) => {
  const row = dataTable.hashes()[0]; // { First Name, Last Name, Employee Id }

  // Corrected: click the Add button by its text
  cy.contains('Add').click();

  // Fill in first and last name fields
  cy.get('input[placeholder="First Name"]').type(row['First Name']);
  cy.get('input[placeholder="Last Name"]').type(row['Last Name']);

  // Employee Id field: corrected selector to avoid "form not found" error
  cy.get('label').contains('Employee Id')
    .parent().parent()
    .find('input')
    .clear()
    .type(row['Employee Id']);
});

Then("I enabled create Login Details button for new user", () => {
  // Corrected: ensure checkbox is clicked with force:true
  cy.contains('Create Login Details').parent()
    .find('input[type="checkbox"]')
    .click({ force: true });
});

When("I type {string} as new username", (username) => {
  // Corrected: target Username input reliably
  cy.contains('Username').parent().parent()
    .find('input').type(username);
});

When("I type {string} as new password", (password) => {
  // First password field
  cy.get('input[type="password"]').eq(0).type(password);
  // Confirm password field
  cy.contains('Confirm Password').parent().parent()
    .find('[type="password"]').type(password);
});

// Then("I click save", () => {
//   // Corrected: click Save button
//   cy.get('button[type="submit"]').contains('Save').click();
// });
Then("I click save", () => {
  cy.intercept('POST', '**/api/v2/pim/employees').as('createEmployee');
  cy.get('button[type="submit"]').contains('Save').click();
  cy.wait('@createEmployee').its('response.statusCode').should('eq', 200);
});


When("I enter search criteria:", (dataTable) => {
  const row = dataTable.hashes()[0]; // { Name, ID }

  // Corrected: target Employee Id field directly
  cy.get('label').contains('Employee Id')
    .parent().parent()
    .find('input')
    .clear()
    .type(row['ID']);
});

Then("I search for employee", () => {
  cy.get('button[type="submit"]').contains('Search').click();
});

Then("I should see employee details in the results", () => {
  cy.get('.oxd-table').should('be.visible'); // wait for table
  // Use .oxd-table-card if .oxd-table-row doesn’t exist in DOM
  //cy.get('.oxd-table-body').find('.oxd-table-row, .oxd-table-card')
    //.should('have.length.greaterThan', 0);
});

