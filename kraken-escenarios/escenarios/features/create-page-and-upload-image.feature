Feature: My feature

@user1 @web
Scenario: Create a new page with the correct title
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 2 seconds
  And I click sign
  And I wait for 5 seconds  
  And I click on Pages
  And I wait for 5 seconds
  And I click on New Page
  And I wait for 2 seconds 
  And I upload the file
  And I wait for 2 seconds 






