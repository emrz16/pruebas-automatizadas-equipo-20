Feature: Crear post con formato de fecha posterior

@user1 @web
Scenario: Como Ghost admin no me es permitido crear post con formato de fecha posterior a la actual
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  And I enter email "<USERNAME_DANIEL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_DANIEL>"
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/editor/post"
  And I enter title "<TITLE>"  
  And I enter content "<CONTENT>" 
  And I wait for 2 seconds
  And I click on post settings
  And I click on hour field
  And I wait for 2 seconds  
  And I clear time content 
  And I enter hour "23:59"
  Then I click on date field
  And I wait for 5 seconds
  
  
  
  