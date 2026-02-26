Feature: OrangeHRM - login
Background: Preconditions
  Given I navigate to the OrangeHRM Login page
@smoke
Scenario: Login into OrangeHRM page
 When I type "Admin" as username
 And I type "admin123" as password
  
 
  Then I click on login button
  Then I should see dashboard


Scenario: Invalid login 
 
  When I type "Admin" as username
  And I type "admin12345" as password
  Then I click on login button
  Then it should display invalid credentials as message
  
