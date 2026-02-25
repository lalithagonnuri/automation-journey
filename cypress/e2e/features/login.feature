Feature: OrangeHRM - Login

@smoke
Scenario: Valid login
  Given I navigate to the OrangeHRM Login page
  When I type "Admin" as username
  And I type "admin123" as password
  Then I click on login button
  Then I should see dashboard
  
@regression
Scenario: Invalid login
  Given I navigate to the OrangeHRM Login page
  When I type "Admin" as username
  And I type "wrongpass" as password
  Then I click on login button
  Then it should display invalid credentials as message
 
