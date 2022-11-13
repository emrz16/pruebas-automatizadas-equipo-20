## Run the project 
cypress run --headless

## Scenaries

## Scenaries: Create a new page 
1. Create a post and display a message cause title exceed 255 characters
2. Create a page successful with the title and body correctly
3. Create new page and uploading a image and create a new page correctly
4. Create a new page and upload a image with wrong extension a display a error message

## Scenaries : Create a new post
1. Create a new post and modify the date, display a message if the date is greater than  today
2. Create a new post and modify the time, put the old time than today, and publish correctly

Kraken |Pro |Contra 
--- | --- | 
 | Es rápido a la hora de ejecutar en comparación de cypress | No se encuentra mucha documentación en la web |
  | Utiliza como base web drive IO lo que permite realizar busqueda en internet para ayudarse a resolver situaciones de selectores | No hay documentación de como correr varios archivos .feature |
