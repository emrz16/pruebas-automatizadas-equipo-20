Feature: My feature


@user10 @web
Scenario: Create a page and upload image with wrong extension
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 2 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 2 seconds
  And I click next v3
  And I wait for 5 seconds  
  And I navigate to page "http://localhost:2368/ghost/#/editor/page" 
  And I wait for 2 seconds 
  And I click add Image
  And I wait for 2 seconds 
  And I select the option Image
  And I wait for 2 seconds
  And I upload the file docx extension
  And I wait for 2 seconds 
  And I got error message v3
  And I wait for 2 seconds 

@user11 @web
Scenario: Create page and upload image
 Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 2 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 2 seconds
  And I click next v3
  And I wait for 5 seconds  
  And I navigate to page "http://localhost:2368/ghost/#/editor/page" 
  And I wait for 2 seconds 
  And I click add Image
  And I wait for 2 seconds 
  And I select the option Image
  And I wait for 2 seconds
  And I upload the file
  And I wait for 2 seconds

@user12 @web
Scenario: Create page with large title and display Alert message
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 2 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 2 seconds
  And I click next v3
  And I wait for 5 seconds  
  And I navigate to page "http://localhost:2368/ghost/#/editor/page" 
  And I wait for 2 seconds
  And I write a title to body "<CONTENT>"  
  And I wait for 3 seconds
  And I write a title to page "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  And I wait for 5 seconds
  And I publish the page v3
  And I wait for 5 seconds
  And I publish in button again
  And I wait for 2 seconds



@user13 @web
Scenario: Create a page with correct title
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email v3 "<USERNAME_GHOST3>"
  And I wait for 2 seconds
  And I enter password v3 "<PASSWORD_GHOST3>"
  And I wait for 2 seconds
  And I click next v3
  And I wait for 5 seconds  
  And I navigate to page "http://localhost:2368/ghost/#/editor/page" 
  And I wait for 2 seconds
  And I write a title to body "body"  
  And I wait for 3 seconds
  And I write a title to page "title"
  And I wait for 5 seconds
  And I publish the page v3
  And I wait for 5 seconds
  And I publish in button again
  And I wait for 2 seconds