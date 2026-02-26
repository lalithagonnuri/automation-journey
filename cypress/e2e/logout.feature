Feature: OrangeHRM Logout

  Background: Preconditions
    Given I navigate to the OrangeHRM Login page
    When I type "Admin" as username
    And I type "admin123" as password
    And I click on login button

  Scenario: Verify user can logout successfully
    Then I logout from orangehrm
    
    Then I should be redirected to the login page
