import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the OrangeHRM Login page", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When("I type {string} as username", (username) => {
  cy.get('input[name="username"]').should('be.visible').clear().type(username);
  //cy.get('input[placeholder="Username"]').should('be.visible').clear().type(username);
});

When("I type {string} as password", (password) => {
  cy.get('input[name="password"]').should('be.visible').clear().type(password);
});

Then("I click on login button", () => {
  cy.get('button[type="submit"]').should('be.visible').click({ force: true });
});

Then("I should see dashboard", () => {
  cy.url().should("include", "/dashboard/index");
});

Then("it should display invalid credentials as message", () => {
  cy.get('.oxd-alert-content.oxd-alert-content--error')
    .should('be.visible')
    .and('contain.text', "Invalid credentials");
});
