Feature: OrangeHRM Claim Management

  Background: Preconditions
    Given I navigate to the OrangeHRM Login page
    When I type "Admin" as username
    And I type "admin123" as password
    Then I click on login button

  Scenario: Employee creates a claim request
    Given I navigate to Claim module
    When I create a new claim request
    And I fill claim details with event "Travel Allowance", currency "Indian Rupee", and remarks "Conference travel expenses"
    

  Scenario: Employee adds expense and submits claim
    Given I navigate to Claim module
    When I open the latest claim
    And I add an expense of type "Accommodation" with date "2025-05-12", amount "12", and note "Hotel stay"
    Then I submit the claim
    And I should see the claim in the claim list
