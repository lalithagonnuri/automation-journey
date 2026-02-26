Feature:leave application
Background:Preconditions
 Given I navigate to the OrangeHRM Login page
    When I type "Admin" as username
    And I type "admin123" as password
    Then I click on login button

Scenario:leave application
Given I navigate to leave
When I Apply leave "CAN-personal" 
Then I click on Apply

Scenario:Check leave
When I navigate to Myleave
Then I  give details
Then I click search
Then it display details