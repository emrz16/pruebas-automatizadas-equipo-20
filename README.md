## Settings
* Kraken version: ^1.0.24"
* Node version: 14.18.2
* ghost version: 5.22.4
* Android studio: Dolphin 2021.3.1

## Ghost version 3.42
1) En la siguiente imagen se muestra las versiones necesarias para correr ghost en las versión 3.42
 ![image](https://user-images.githubusercontent.com/60898371/202872360-bfdaad6b-b8ae-4445-b5d3-97b6ca361b6d.png)
2) Situarse en la carpeta ghost cd ghost y realizar npm install
3) ejecutar: ghost start


## Run the project cypress
* cypress: run --headless

## Run the project cypress
* Sistema operativo windows:
 ../node_modules/kraken-node/bin/kraken-node run
* Observaciones: Es necesario tener solo un archivo .feature 
para correr el de versión 5, cambiar la extensión de la versión 3, por ejemplo .js
 
## Run a HTML 
* Download a live server in visual studio code 
![image](https://user-images.githubusercontent.com/60898371/202727147-c785b827-4157-4b9b-b5e3-c30e54778760.png)
* And then rigth click on html file and select "Open with live server" 
<img width="799" alt="live server" src="https://user-images.githubusercontent.com/60898371/202727494-3816da01-4e44-4244-a3b9-94cbdd16a57b.png">

## Scenaries

## Scenaries : Edit admin's credentials.
1. When editing admin's name, it is changed and saved successfully
2. When leaving empty admin's name input, it won't save changes
3. When editing an email, it can be saved with the correct form
4. When editing an email, it won't be saved without the correct structure of an e-mail

## Scenaries: Search members

1. When searching an existing member, by its name, on the search bar, it is found successfully
2. When searching a non existing member, by its name, on the search bar, it shows that the member was not found
3. When searching an existing member, by its e-mail, on the search bar, it is found successfully
4. When searching a non existing member, by its e-mail, on the search bar, it shows that the member was not found

## Scenaries: Validation of admin's login credentials

1. When leaving empty admin's email input, the login is not successful
2. When writing the incorrect password on admin's password input, the login is not succesful.
3. When writing admin's email without its domain, the login is not successful
4. When writing admin's email without '@', the login is not successful

## Scenaries: Create a new page 

1. Create a post and display a message cause title exceed 255 characters
2. Create a page successful with the title and body correctly
3. Create new page and uploading a image and create a new page correctly
4. Create a new page and upload a image with wrong extension a display a error message

## Scenaries : Create a new post

1. Create a new post and modify the date, display a message if the date is greater than  today
2. Create a new post and modify the time, put the old time than today, and publish correctly
3. When creating a new post with a wrong date format, it won't be successful
4. Create a new post with a right date format 
