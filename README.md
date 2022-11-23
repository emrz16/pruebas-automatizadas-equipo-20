## Data pool a priori
![image](https://user-images.githubusercontent.com/60898371/203427882-38636004-9ac3-4f91-ab57-be87a54baa74.png)

## Settings
* Kraken version: ^1.0.24"
* Node version: 14.18.2
* ghost version: 5.22.4
* Android studio: Dolphin 2021.3.1
*cypres version: 10.9.0

## Ghost version 3.42
1) En la siguiente imagen se muestra las versiones necesarias para correr ghost en las versión 3.42
 ![image](https://user-images.githubusercontent.com/60898371/202872360-bfdaad6b-b8ae-4445-b5d3-97b6ca361b6d.png)
2) Situarse en la carpeta ghost cd ghost y realizar npm install
3) ejecutar: ghost start

## Ghost version mayor a 5
![image](https://user-images.githubusercontent.com/60898371/202880254-baaa0b15-35cd-4114-99db-3bd458c5b629.png)



## Run the project cypress
```
  cypress: run --headless
```


## Run the project Kraken
* Sistema operativo windows:
 ```
  ../node_modules/kraken-node/bin/kraken-node run 
 ```

* Observaciones: Es necesario tener solo un archivo .feature 
para correr el de versión 5, cambiar la extensión de la versión 3, por ejemplo a una extesión .js y ejecutar el comando, después hacer lo mismo con el archivo de la versión 3

* Sitema operativo macOS: No es necesario realizar lo anterior
 
## Run the report
 ```
    cd reporte/resemble
    npm install
    node index.js
 ```
 
   * creara un archivo dentro de la carpeta results/report.html
   * Los escenarios de pruebas escogidos son los que se encuentran en las carpetas de screenshot para cypress, y reporte para kraken, este script ejecuta indiferente a la cantidad de escenarios, ejemplo, si se colacan 40 imagenes se comparan las 40 imagenes, o si son 10 se comparan las 10. 

## Scenaries

## Scenaries : Edit admin's credentials.
1. When editing admin's name, it is changed and saved successfully
```
  -login
  -click profile avatar
  -select third option
  -modify input name
  -click on save button
  - saved succesfully
```
3. When leaving empty admin's name input, it won't save changes
```
  -login
  -click profile avatar
  -select third option
  -clean input name admin
  -click on save button
  -display a validation message  under input name
```
5. When editing an email, it can be saved with the correct form
```
  -login
  -click profile avatar
  -select third option
  -change the email admin in the input
  -click on save button
  - saved succesfully
```
7. When editing an email, it won't be saved without the correct structure of an e-mail
```
   -login
  -click profile avatar
  -select third option
  -change the email admin in the input with wrong structure
  -click on save button
  -display a validation message
```

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

1. Create a post and display a message cause title exceed 255 characters : 
 ```
   -login
   -click on Page
   -click on new page
   -clic to write in title, and write words exceed 255 characters
   -click to write a body to the page
   -click publish
   -display a error message
  ```
3. Create a page successful with the title and body correctly
   ```
    -login
   -click on Page
   -click on new page
   -clic to write in title
   -click to write a body to the page
   -click publish
   -continue publishing
   -page is publish with sucess
   ```
5. Create new page and uploading a image and create a new page correctly
```
   -login
   -click on Page
   -click on new page
   -clic to write in title
   -click to write a body to the page
   -upload a imagen with correct extension
   -click on publish button
   -continue publishing
   -page is publish with sucess
```
7. Create a new page and upload a image with wrong extension a display a error message
 ```
   -login
   -click on Page
   -click on new page
   -clic to write in title
   -click to write a body to the page
   -upload a imagen with wrong extension
   -click on publish button
   -display a error message caused extesion file
```

## Scenaries : Create a new post

1. Create a new post and modify the date, display a message if the date is greater than  today
 ```
   -login
   -click on Post
   -click on new post
   -clic to write in title
   -click to write a body to the page
   -click on setting
   -write a invalid time in publish date
   -close setting
   -click publish
   -display a validation message
```
3. Create a new post and modify the time, put the old time than today, and publish correctly
 ```
   -login
   -click on Post
   -click on new post
   -clic to write in title
   -click to write a body to the page
   -click on setting
   -write a valid time in publish date
   -close setting
   -click publish
   -published succesfully
```
5. When creating a new post with a wrong date format, it won't be successful
```
   -login
   -click on Post
   -click on new post
   -clic to write in title
   -click to write a body to the page
   -click on setting
   -write a invalid format publish date
   -close setting
   -click publish
   -display a validation message
```
7. Create a new post with a right date format 
```
   -login
   -click on Post
   -click on new post
   -clic to write in title
   -click to write a body to the page
   -click on setting
   -write a valid format publish date
   -close setting
   -click publish
   -published succesfully
```
