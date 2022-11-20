Feature: My feature

@user1 @web
Scenario: Como usuario inicio sesion y edito el nombre del administrador
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 1 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 1 seconds
  And I click next v3
  And I wait for 1 seconds
  And I click on options user profile 
  And I wait for 1 seconds
  And I click on user profile
  And I wait for 1 seconds
  And I Focus on user name
  And I wait for 1 seconds
  And I remove text from id "user-name"
  And I wait for 1 seconds
  Then I Click in save name v3
  And I wait for 1 seconds

@user2 @web
Scenario: Como usuario inicio sesion y edito el nombre del administrador
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 1 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 1 seconds
  And I click next v3
  And I wait for 1 seconds
  And I click on options user profile 
  And I wait for 1 seconds
  And I click on user profile
  And I wait for 1 seconds
  And I Focus on user name
  And I wait for 1 seconds
  And I enter text "Prueba"
  And I wait for 1 seconds
  Then I Click in save name v3
  And I wait for 1 seconds

@user3 @web
Scenario: Como usuario inicio sesion y edito el nombre del administrador
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 1 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 1 seconds
  And I click next v3
  And I wait for 1 seconds
  And I click on options user profile 
  And I wait for 1 seconds
  And I click on user profile
  And I wait for 1 seconds
  And I delete a email profile
  And I write a email profile 'prueba2@gmail.com'
  Then I Click in save name v3
  And I wait for 2 seconds


@user4 @web
Scenario: Como usuario inicio sesion y edito el nombre del administrador
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 1 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 1 seconds
  And I click next v3
  And I wait for 1 seconds
  And I click on options user profile 
  And I wait for 1 seconds
  And I click on user profile
  And I wait for 1 seconds
  And I delete a email profile
  And I write a email profile 'e.rodriguezz@'
  Then I Click in save name v3
  And I wait for 2 seconds