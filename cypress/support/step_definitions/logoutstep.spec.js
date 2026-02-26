import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Then("I logout from orangehrm", () => {
    
   cy.get('.oxd-userdropdown-tab').click();
    cy.get('[role="menuitem"]').contains('Logout').click();
});


Then("I should be redirected to the login page", () => {
  cy.url().should("include", "/auth/login");
  cy.get('button[type="submit"]').should("be.visible"); // login button visible again
});
