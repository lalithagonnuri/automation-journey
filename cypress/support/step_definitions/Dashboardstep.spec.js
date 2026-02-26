import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("I navigate to user dashboard", () => {
//   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
// });
Then ("assert dashboard",()=>{
  
  cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  
});
Then("I check the user profile", () => {
  cy.get(".oxd-userdropdown-name").should("exist");
});

Then("I check my punch in time", () => {
  cy.get('.orangehrm-attendance-card-bar span b',{ timeout: 10000 })
    .first() // punch in
    .invoke('text')
    .then((text) => {
      cy.log("Punch In time: " + text);
    });
});

Then("I check my punch out time", () => {
  cy.get('.orangehrm-attendance-card-bar span b',{ timeout: 10000 })
    .eq(1) // punch out
    .invoke('text')
    .then((text) => {
      cy.log("Punch Out time: " + text);
    });
});



// Then("I update Punch in time", () => {
//   cy.get('.orangehrm-attendance-card-action').click();

//   cy.get('[placeholder="hh:mm"]').type("11:00AM");
//   cy.get('[placeholder="Type here"]').type("wfh");
//   cy.get('button[type="submit"]').click();
// });

// Then("I update Punch out time", () => {
// cy.get('.orangehrm-attendance-card-action').click();

//   cy.get("..oxd-icon bi-stopwatch").click();
//   cy.get('[placeholder="hh:mm"]').type("7:00PM");
//  cy.get('textarea[placeholder="Type here"]')
//   .should('be.visible')
//   .click()
//   .type('wfh');

//   cy.get('button[type="submit"]').click();
//   cy.url().should("include", "/attendance/punchOut"); // ✅ inside the step
// });

Then("I check Timesheet", () => {
  cy.contains("My Timesheet").click({force:true});
  cy.get('button[type="submit"]').click({force:true});
  cy.get('[placeholder="Type for hints..."]').type("software");
  // replace cy.select with proper Cypress commands, e.g. cy.contains("Apache Software Foundation...").click()
  cy.contains("Apache Software Foundation - ASF - Phase 1").click();
  cy.get(".oxd-select-text-input").click();
  cy.contains("QA Testing").click();
  cy.contains("Mon").type("8");
  cy.get('button[type="submit"]').click();
});
// Then I check the user profile 
// Given I navigate to user dashboard