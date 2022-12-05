## Esecenarios seleccionados para la estrategia de pruebas 
| Funcionalidad  |Escenario | enlace | estrategia
| ------------- | ------------- |-------|--|
| Crear post  | Crear un post correctamente, ingresar title y description correctamente  |[#1](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)| manual - automatizada -VRT -generacion de datos
| Crear post  | Crear un post con titulo mayor a 255 caracteres: |[#2](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)| manual - automatizada -VRT-generacion de datos
| Crear post  | Crear un post con titulo menor a 255 caracteres  |[#3](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)| manual - automatizada -VRT-generacion de datos
| Crear post    |Crear un post con titulo menor a 255 caracteres y adjuntar imagen con extensión incorrecta|[#4](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)| manual - automatizada -VRT-generacion de datos
|Crear post | Editar un post después de crear y dar clic en update |[#5](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)|  manual - automatizada -VRT-generacion de datos
|Crear post | Editar un post creado dando clic al botón de estadísticas: |[#6](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)| manual - automatizada -VRT-generacion de datos
|Crear post | Crear post y modificar el contenido de Excerpt con mas de 300 caracteres |[#7](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)|  manual - automatizada -VRT-generacion de datos
|Crear post | Crear post y modificar el contenido de Excerpt con menos de 300 caracteres |[#8-VRT](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/post.cy.js)|  manual - automatizada -VRT-generacion de datos
|Editar datos de admin  |Editar nombre |  [#9-VRT](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/cypress-escenarios/cypress/e2e/ghost-5/panel_admin_y_miembros.cy.js)[datos](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/members.cy.js) | manual - automatizadas- vrt- generacion de datos| 
|Editar datos de admin  |dejar vacio campo nombre en perfil | [#10-VRT](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/cypress-escenarios/cypress/e2e/ghost-5/panel_admin_y_miembros.cy.js) [datos](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/members.cy.js) |manual - automatizadas- vrt- generacion de datos| 
|Editar datos de admin  |guarda email con formato correcto |[#11-VRT](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/cypress-escenarios/cypress/e2e/ghost-5/panel_admin_y_miembros.cy.js) [datos](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/members.cy.js)|manual - automatizadas- vrt- generacion de datos
|Editar datos de admin  |no guarda email con formato incorrecto |[#12-VRT](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/cypress-escenarios/cypress/e2e/ghost-5/panel_admin_y_miembros.cy.js) [datos](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/members.cy.js)|manual - automatizadas- vrt- generacion de datos
|Crear nueva etiqueta |Create tag with title and description | [12](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/tag.cy.js)
|Crear nueva etiqueta |Create tag without name| [14](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/tag.cy.js)|
|Crear nueva etiqueta |Create tag with invalid color format| [15](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/tag.cy.js)| manual-automatizadas - datos
|Crear nueva etiqueta |Create tag with valid color format| [16](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/tag.cy.js)|manual-automatizadas - datos
|Crear nueva etiqueta ||Create tag with name with more than 191 characters| [17](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/tag.cy.js)|manual-automatizadas - datos

|Crear nueva pagina | Create page with title and body successfully |[18](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/page.cy.js)|manual-automatizadas - datos

|Buscar miembros| search non member by name | [19-datos](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/estrategias-cypress/cypress/e2e/members.cy.js) [vrt]https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/cypress-escenarios/cypress/e2e/ghost-5/searchMember.cy.js|generacion de datos - vtr - manual - automatizado|manual-automatizadas - datos

|Crear nuevo miembro|  Add member with note|manual-automatizadas - datos | [20](https://github.com/emrz16/pruebas-automatizadas-equipo-20/blob/master/cypress-escenarios/cypress/e2e/ghost-5/panel_admin_y_miembros.cy.js) | vrt - manual- automatizada




 



## Estrategias de datos para pruebas en cypress 
* Se corre en la version 5.22.4 de ghost 
Información detallada: 
![image](https://user-images.githubusercontent.com/60898371/204042967-54fa1d1e-60ea-4b17-bdf5-102d1f2c0c74.png)
* Información de cypress para las pruebas
![image](https://user-images.githubusercontent.com/60898371/204057572-5eca6cf0-cff8-466d-9964-7e2ec7f8616b.png)


## pool de datos a priori
Para la realización de los datos a priori se utilizo la aplicación https://www.mockaroo.com/ , se cambian los nombres de las variables, y se seleccionan los tipos de datos que queremos que tengas estás variables, una vez construido esto, se exporta los datos en un archivo json, y se lee desde cada una de las pruebas e2e.

![image](https://user-images.githubusercontent.com/60898371/204113518-ca25bfe4-67d4-4581-b2e9-d55baf2fe4ac.png)
![image](https://user-images.githubusercontent.com/54257496/204153194-5ee23ed7-046d-4311-b084-1960210de519.png)
![image](https://user-images.githubusercontent.com/54257496/204153265-fc9f5347-6c6d-4ca8-bb9c-1d4dcb9e4525.png)


##  Pool de datos (pseudo) aleatorio dinámico
Por medio de la aplicación https://www.mockaroo.com/ se construye un api de consumo, inicialmente se realiza el mismo procedimiento, se nombran las variables, se escogen los tipos de datos y en la parte superior está la opción de realizar un "mock apis" con el esquema creado, y al generarlo, lanza una url la cual se le puede hacer solicitudes https desde el código, está se implementa en los pruebas e2e de cypress.

* url para Pages y Post : https://my.api.mockaroo.com/pages.json?key=a7166340

##  Escenario aleatorio
Se hace una inslación de la librería faker en el proyecto, y se utiliza la documentación para hacer la implementación de los datos aleatorios en las pruebas e2e de cypress.

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
```
   -login
   -click on members
   -click on filter
   -click on Name
   -Select Name
   -Click on Apply filters
   -Type on the search bar a member name

```
2. When searching a non existing member, by its name, on the search bar, it shows that the member was not found
```
   -login
   -click on members
   -click on filter
   -click on Name
   -Select Name
   -Click on Apply filters
   -Type on the search bar a non member name

```
3. When searching an existing member, by its e-mail, on the search bar, it is found successfully
```
   -login
   -click on members
   -click on filter
   -click on List Name
   -Select Email
   -Click on Apply filters
   -Type on the search bar a member email

```
4. When searching a non existing member, by its e-mail, on the search bar, it shows that the member was not found

```
   -login
   -click on members
   -click on filter
   -click on List Name
   -Select Email
   -Click on Apply filters
   -Type on the search bar a non member email

```

## Scenaries: Validation of admin's login credentials

1. When leaving empty admin's email input, the login is not successful
 ```
   -Empty email field
   -Type the correct password
   -click on sign in
  ```
2. When writing the incorrect password on admin's password input, the login is not succesful.
 ```
   -Type the email
   -Type an incorrect password 
   -click on sign in
  
  ```
3. When writing admin's email without its domain, the login is not successful
 ```
   -Type an email without its domain
   -Type the correct password
   -click on sign in
  ```
4. When writing admin's email without '@', the login is not successful
 ```
   -Type an email without @
   -Type the correct password
   -click on sign in
  ```

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
