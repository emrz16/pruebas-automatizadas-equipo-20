Feature: Realizar Login dejando espacio inicial correo

@user1 @web
Scenario: Como Ghost Admin quiero hacer login dejando espacio inicial de correo
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  And I enter spaced email " d.bustosr@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_DANIEL>"
  And I wait for 4 seconds
  Then I click sign in  
  And I wait for 5 seconds
  
  