<a href="http://www.unpaz.edu.ar"><img src="https://www.unpaz.edu.ar/sites/default/files/unpaz_0.png" title="FVCproductions" alt="UNPAZ"></a>

# Empezando con Trabajo Practico Integrador

## Tabla de contenidos
- [Empezando](#Empezando)
  - [Requerimientos](#Requerimientos)
  - [Dependencias](#Dependencias)
  - [Solución](#Solución)
  - [Deploy](#Deploy)
  - [Uso](#Uso)
  - [Contacto](#Contacto)
  - [Licencia](#Licencia)
 

### Empezando
El presente trabajo práctico de la cursada Práctica Integradora correspondiente a la carrera Analista Programador Universitario de la Universidad Nacional de José se Paz tiene por objetivo crear 2 aplicaciones web que trabajen en conjunto para poder simular el registro de todos los tutoriales que la Universidad pública.
La primera aplicación será una API sobre los tutoriales a través de la cual se podrán realizar las operaciones básicas de registración, actualización, borrado y consulta de los tutoriales.
La segunda aplicación será la interface de usuario que permitirá navegar por las distintas opciones de la página web para realizar las operaciones a través de una interface amigable y fácil de usar. Esta aplicación deberá realizar las distintas operaciones por medio de la API.  


Para el desarrollo de la api se define el objeto tutorial con los siguientes atributos: 
{

        "id": 3,

        "Titulo": "Programción 1",

        "Descripcion": "Aprender a Programar",

        "publicado": true,

}

Funciones disponibles api:
* Operaciones crud  

Repositorio de la api : [https://github.com/fernandocorinaldesi/segundo-parcial-api](https://github.com/fernandocorinaldesi/segundo-parcial-api)  

Funciones disponibles front en react :
* Operaciones crud
* Busqueda dinamica en el front
* Función experimental copia de seguridad en csv de la Base de datos
* Función experimental exportacion hacia la api de la base de datos en csv
 
### Requerimientos 

 - Nodejs  (v7 o superior) instalado

### Dependencias 

 - react-bootstrap
 - react-papaparse
 - @material-ui/core
 - @material-ui/icons
 - react-csv
 - react-fade-in
 

### Solución   

![screenshoot](https://i.ibb.co/6t42ZXn/tpdise-o.jpg)

Main layer     | Type   | Descripcion
--------------------- | -------------------- | ---------------------  
View layer | Front ui/ux | Esta es la capa de la vista, fue realizada con react.js utilizando componentes reutilizables y estados
HTTP logic layer | Routes + Controllers | Esta capa manejara las peticiones http y las routeara a su correspondiente controllador
Business logic layer | Services + Data Access | Contiene la logica de negocio asi como el acceso a nuestra base de datos, esta fue simplicada un poco teniendo en cuenta el tamaño de la api y el hecho de no usar un orm junto  con un modelo  


Estructura del front :  
![screenshoot](https://i.ibb.co/0hn6vhK/front.jpg)
### Deploy  
[https://react-front-api.herokuapp.com/](https://react-front-api.herokuapp.com/

### Uso  

Instalacion de dependencias :  

`npm install`

Para su ejecucion en el directorio del proyecto ejecutar :  

`npm start`

### Contacto

Puedes enviar un mail a alguna de las siguientes direcciones : 

- fcorinaldesi@unpaz.edu.ar
- fernandocorinaldesi@hotmail.com

### Licencia

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
