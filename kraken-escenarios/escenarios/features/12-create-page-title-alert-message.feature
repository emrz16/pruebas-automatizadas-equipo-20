Feature: My feature

@user1 @web
Scenario: Create a new page with the wrong title
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