Feature:OrangeHRM dashboard
 Background:Preconditions
   
Given I navigate to the OrangeHRM Login page
  When I type "Admin" as username
  And I type "admin123" as password
  Then I click on login button
  


Scenario:Verify dashboard actions
 
Then assert dashboard
Then I check the user profile
Then I check my punch in time
 
 Then I check Timesheet