Feature: My feature

@user1 @web
Scenario: Create a new page with the correct title
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "j.quinchia@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "OrionQuinchia"
  And I wait for 2 seconds
  And I click sign
  And I wait for 5 seconds  
  And I click on Pages
  And I wait for 5 seconds
  And I click on New Page
  And I wait for 2 seconds 
  And I upload the file
  And I wait for 2 seconds 






