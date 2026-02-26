import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://opensource-demo.orangehrmlive.com";

// --------------------
// Navigate to Claim
// --------------------
Given("I navigate to Claim module", () => {
  cy.visit(`${baseUrl}/web/index.php/claim/viewAssignClaim`);
  cy.url().should('include', '/claim/viewAssignClaim');
  cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Claim');
});

// --------------------
// Create Claim Request
// --------------------
When("I create a new claim request", () => {
  cy.contains('button', 'Assign Claim').click(); // +Assign Claim button
  cy.contains('button', 'Create').click();       // Create Claim Request form
});

When(
  "I fill claim details with event {string}, currency {string}, and remarks {string}",
  (event, currency, remarks) => {
    cy.get('.oxd-select-text-input').eq(0).click();
    cy.contains('.oxd-select-option', event).click();

    cy.get('.oxd-select-text-input').eq(1).click();
    cy.contains('.oxd-select-option', currency).click();

    cy.contains('label', 'Remarks')
      .parents('.oxd-input-group')
      .find('textarea')
      .type(remarks);

    cy.contains('button', 'Create').click();
  }
);

// Then("I should see the claim draft created", () => {
//   cy.get('.oxd-table').should('be.visible');
//   cy.get('.oxd-table-body .oxd-table-row').first().within(() => {
//     cy.get('.oxd-table-cell').eq(2).should('contain.text', 'Travel Allowance');
//   });
// });

// --------------------
// Add Expense + Submit
// --------------------
When("I open the latest claim", () => {
  cy.get('.oxd-table-body .oxd-table-row').first().within(() => {
    cy.contains('View Details').click();
  });
});

When(
  "I add an expense of type {string} with date {string}, amount {string}, and note {string}",
  (type, date, amount, note) => {
    cy.contains('button', 'Add').click(); // +Add Expense
    cy.get('.oxd-select-text-input').click();
    cy.contains('.oxd-select-option', type).click();

    cy.get('input[placeholder*="yyyy"]').type(date);
    cy.contains('label', 'Amount')
      .parents('.oxd-input-group')
      .find('input')
      .type(amount);

    cy.contains('label', 'Note')
      .parents('.oxd-input-group')
      .find('textarea')
      .type(note);

    cy.contains('button', 'Save').click();
  }
);

Then("I submit the claim", () => {
  cy.contains('button', 'Submit').scrollIntoView().click();
});

Then("I should see the claim in the claim list", () => {
  cy.get('.oxd-table').should('be.visible');
  cy.get('.oxd-table-body .oxd-table-row').first().within(() => {
    //cy.get('.oxd-table-cell').eq(5).should('contain.text', 'Submitted');
  });
});
