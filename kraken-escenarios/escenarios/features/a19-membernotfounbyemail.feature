Feature: Al buscar un miembro que no existe, por su e-mail, indica en un mensaje que no se encuentra.

@user1 @web
Scenario: Como Ghost admin quiero buscar un miembro por su e-mail y al no existir me indica que no existe.
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  And I enter email "<USERNAME_CRISTINA>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_CRISTINA>"
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  And I click Filter
  And I wait for 3 seconds
  And I click on List Name
  And I wait for 3 seconds
  And I select Email
  And I wait for 3 seconds
  And I click on Apply filters
  And I wait for 2 seconds
  And I type on the search bar a non member email
  And I wait for 2 seconds