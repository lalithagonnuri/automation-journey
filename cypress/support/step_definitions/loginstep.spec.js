import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the OrangeHRM Login page", () => {
  cy.intercept('POST', '/web/index.php/auth/validate').as('LoginRequest');
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When("I type {string} as username", (username) => {
  cy.get('[name="username"]').clear().type(username);
});

When("I type {string} as password", (password) => {
  cy.get('[name="password"]').clear().type(password);
});

Then("I click on login button", () => {
  cy.get('button[type="submit"]').click({ force: true });
});

Then("I should see dashboard", () => {
  cy.url().should("include", "/dashboard/index");
  //cy.wait('@LoginRequest').its('response.statusCode').should('eq', 200);
});

Then("it should display invalid credentials as message", () => {
  cy.get('.oxd-alert-content.oxd-alert-content--error')
    .should('be.visible')
    .and('contain.text', "Invalid credentials");
});

// Then("login request should fail", () => {
//   cy.wait('@LoginRequest').its('response.statusCode')
//     .should('be.oneOf', [302, 400, 401]);
// });
