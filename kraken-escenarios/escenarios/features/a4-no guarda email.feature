Feature: My feature 2

@user1 @web
Scenario: Como usuario inicio sesion y edito el nombre del administrador
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME_EMMANUEL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD_EMMANUEL>"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click on options user profile
  And I wait for 1 seconds
  And I click on user profile
  And I wait for 1 seconds
  And I delete a email profile
  And I write a email profile 'e.rodriguezz@'
  Then I Click in save name
  And I wait for 2 seconds
