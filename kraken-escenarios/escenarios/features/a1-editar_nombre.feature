Feature: My feature 1

@user1 @web
Scenario: Como usuario inicio sesion y edito el nombre del administrador
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME_JULIETH>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click on options user profile
  And I wait for 1 seconds
  And I click on user profile
  And I wait for 1 seconds
  And I Focus on user name
  And I wait for 1 seconds
  And I enter text "Prueba"
  And I wait for 1 seconds
  Then I Click in save name
  And I wait for 1 seconds
