Feature: OrangeHRM PIM

  Background: Preconditions
    Given I navigate to the OrangeHRM Login page
    When I type "Admin" as username
    And I type "admin123" as password
    Then I click on login button
  @smoke @pim
  Scenario: Add Employee
    Given I navigate to PIM
    When I enter employee details:
      | First Name | Last Name | Employee Id |
      | Gonnuri    | Lalitha   | 0616        |
    Then I enabled create Login Details button for new user
    When I type "lalitha" as new username
    And I type "lalitha123" as new password
    Then I click save

  Scenario: Search for Employee
    Given I navigate to PIM
    When I enter search criteria:
      | Name    | ID   |
      | Lalitha | 0616 |
    Then I search for employee
    And I should see employee details in the results

  Scenario: Login with new username
    Then I logout from orangehrm
    Given I navigate to the OrangeHRM Login page
    When I type "lalitha" as username
    And I type "lalitha123" as password
    Then I click on login button
