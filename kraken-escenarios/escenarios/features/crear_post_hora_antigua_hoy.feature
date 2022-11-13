Feature: Crear post con hora anterior a la actual

@user1 @web
Scenario: Como Ghost admin me permite crear post con formato de fecha anteriores a la actual
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  And I click sign  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/editor/post"
  And I wait for 3 seconds
  And I write a title to page "<TITLE>"  
  And I wait for 3 seconds
  And I write a title to body "<CONTENT>" 
  And I wait for 2 seconds
  And I click on post settings
  And I wait for 2 seconds
  And I set the time a old time
  And I wait for 2 seconds
  Then I click to publish the post
  And I wait for 2 seconds
  And I continue publishig
  And I wait for 2 seconds
  And I click on publish right now
