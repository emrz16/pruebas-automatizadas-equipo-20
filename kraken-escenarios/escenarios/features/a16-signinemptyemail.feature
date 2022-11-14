Feature: Validación de campo de email al iniciar Ghost 

@user1 @web
Scenario: Como Ghost public Admin no me permite continuar con el login, dejando el campo de E-mail vacío
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  And I click sign in
  And I wait for 5 seconds
  