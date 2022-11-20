Feature: Al iniciar sesión, debe aparecer un mensaje si la contraseña es incorrecta.

@user1 @web
Scenario: Como Ghost admin, al iniciar sesión, si la contraseña es incorrecta debe indicarlo.
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  And I enter email "<USERNAME_CRISTINA>"
  And I wait for 2 seconds
  And I enter incorrect password 
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds