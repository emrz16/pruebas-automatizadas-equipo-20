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

  @user5 @web
Scenario: Como usuario inicio sesion y edito el nombre del administrador
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME_JULIETH>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click in members menu
  And I wait for 1 seconds
  And I write a member name "Emmanuel"
  And I wait for 1 seconds


  @user6 @web
Scenario: Como Ghost admin quiero crear post con formato de fecha correcta
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/editor/post"
  And I enter title "<TITLE>"  
  And I enter content "<CONTENT>" 
  And I wait for 2 seconds
  And I click on post settings
  And I click on hour field
  And I wait for 2 seconds 
  And I clear time content 
  And I enter hour "00:10"
  And I wait for 2 seconds 
  And I click on post settings
  And I click on publish
  And I click on final review
  Then I click on publish right now
  And I wait for 5 seconds

  @user7 @web
Scenario: Como Ghost admin quiero crear post con formato de fecha incorrecto
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/editor/post"
  And I enter title "<TITLE>"  
  And I enter content "<CONTENT>" 
  And I wait for 2 seconds
  And I click on post settings
  And I click on hour field
  And I wait for 2 seconds 
  And I clear time content 
  And I enter hour "25:00"
  Then I click on date field
  And I wait for 5 seconds
  
 @user8 @web
Scenario: Como Ghost admin no me es permitido crear post con formato de fecha posterior a la actual
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/editor/post"
  And I enter title "<TITLE>"  
  And I enter content "<CONTENT>" 
  And I wait for 2 seconds
  And I click on post settings
  And I click on hour field
  And I wait for 2 seconds  
  And I clear time content 
  And I enter hour "23:59"
  Then I click on date field
  And I wait for 5 seconds
  
   

@user9 @web
Scenario: Como Ghost admin me permite crear post con formato de fecha anteriores a la actual
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  And I click sign  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/editor/post"
  And I wait for 3 seconds
  And I write a title to page "<TITLE>"  
  And I wait for 3 seconds
  And I write a title to body "<CONTENT>" 
  And I wait for 2 seconds
  And I click on post settings
  And I wait for 2 seconds
  And I set the time a old time
  And I wait for 2 seconds
  Then I click to publish the post
  And I wait for 2 seconds
  And I continue publishig
  And I wait for 2 seconds
  And I click on publish right now

@user10 @web
Scenario: Create a page and upload image with wrong extension
  Given I navigate to page "<GHOST_LINK>"
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
  Given I navigate to page "<GHOST_LINK>"
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
  Given I navigate to page "<GHOST_LINK>"
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
  Given I navigate to page "<GHOST_LINK>"
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

  @user14 @web
Scenario: Como Ghost Admin quiero hacer login dejando espacio inicial de correo
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter spaced email " <USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  Then I click sign in  
  And I wait for 5 seconds

@user15 @web
Scenario: Como Ghost Admin quiero hacer login omitiendo el arroba del correo
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter spaced email "j.quinchiauniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  Then I click sign in  
  And I wait for 5 seconds
  

  @user16 @web
Scenario: Como Ghost public Admin no me permite continuar con el login, dejando el campo de E-mail vacío
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I click sign in
  And I wait for 5 seconds

 @user17 @web
Scenario: Como Ghost admin, al iniciar sesión, si la contraseña es incorrecta debe indicarlo.
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter incorrect password 
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds

@user18 @web
Scenario: Como Ghost admin quiero buscar un miembro por su e-mail y encontrarlo con éxito.
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
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
  And I type on the search bar a member email
  And I wait for 2 seconds

 @user19 @web
Scenario: Como Ghost admin quiero buscar un miembro por su e-mail y al no existir me indica que no existe.
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
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

@user20 @web
Scenario: Como Ghost admin quiero buscar un miembro por su nombre y al no existir me indica que no existe.
  Given I navigate to page "<GHOST_LINK>"
  And I wait for 5 seconds
  And I enter email "<USERNAME_JULIETH>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD_JULIETH>"
  And I wait for 4 seconds
  And I click sign in  
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  And I click Filter
  And I wait for 3 seconds
  And I click on Name
  And I select Name
  And I click on Apply filters
  And I wait for 2 seconds
  And I type on the search bar a non member
  And I wait for 2 seconds



 
 
  


