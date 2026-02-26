{/* <button data-v-10d463b7="" type="submit" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"><!----> Apply <!----></button> */}
import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
Given ("I navigate to leave",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList");

})
When("I Apply leave {string}",(pers)=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave");
//    cy.get('.oxd-topbar-body-nav').within(() => {
//   cy.contains('Apply').click();
// });

   // Click the dropdown to open options
cy.get('.oxd-select-text--arrow').click();

// Select the option by its visible text
cy.contains('CAN - Personal').click();

   // From Date
// safer selector for date inputs
cy.get('input[placeholder*="yyyy"]').first().type("2025-12-15");
cy.get('input[placeholder*="yyyy"]').last().type("2025-12-20");


});
Then ("I click on Apply",()=>{
   cy.get('button[type="submit"]').click({force:true});
});
When ("I navigate to Myleave",()=>{
   // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave");
//cy.get('.oxd-topbar-body-nav').within(() => {
  cy.contains('My Leave').click();
    //
    

})


Then ("I  give details",()=>{
// safer selector for date inputs
cy.get('input[placeholder="yyyy-dd-mm"]').first().type("2025-12-15");
cy.get('input[placeholder="yyyy-dd-mm"]').last().type("2025-12-20");


})
Then ("I click search",()=>{
cy.get('button[type="submit"]').click({force:true});
})
// Then("it display details",()=>{

// }) 
// Then it display details