Feature: My feature

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
  And I remove text from id "user-name"
  And I wait for 1 seconds
  Then I Click in save name
  And I wait for 1 seconds

@user2 @web
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

@user3 @web
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
  And I delete a email profile
  And I write a email profile 'j.quinchia@uniandes.edu.co'
  Then I Click in save name
  And I wait for 2 seconds


@user4 @web
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
  And I delete a email profile
  And I write a email profile 'e.rodriguezz@'
  Then I Click in save name
  And I wait for 2 seconds

@user10 @web
Scenario: Create a page and upload image with wrong extension
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 2 seconds
  And I click sign
  And I wait for 5 seconds  
  And I click on Pages
  And I wait for 5 seconds
  And I click on New Page
  And I wait for 2 seconds 
  And I upload the file docx extension
  And I wait for 2 seconds 
  And I got error message
  And I wait for 2 seconds 

@user11 @web
Scenario: Create page and upload image
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 2 seconds
  And I click sign
  And I wait for 5 seconds  
  And I click on Pages
  And I wait for 5 seconds
  And I click on New Page
  And I wait for 2 seconds 
  And I upload the file
  And I wait for 2 seconds 

@user12 @web
Scenario: Create page with large title and display Alert message
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 2 seconds
  And I click sign
  And I wait for 5 seconds  
  And I click on Pages
  And I wait for 5 seconds
  And I click on New Page
  And I wait for 2 seconds
  And I write a title to body "body"
  And I wait for 2 seconds
  And I write a title to page "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  And I wait for 5 seconds
  And I click to publish the page
  And I wait for 5 seconds

@user13 @web
Scenario: Create a page with correct title
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 2 seconds
  And I click sign
  And I wait for 5 seconds  
  And I click on Pages
  And I wait for 5 seconds
  And I click on New Page
  And I wait for 2 seconds
  And I write a title to page "Title"
  And I wait for 2 seconds
  And I write a title to body "body"
  And I wait for 2 seconds
  And I click to publish the page
  And I wait for 2 seconds