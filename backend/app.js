'use strict'
//acceder alos modulos express y bodyparser
var express = require('express');
var bodyParser = require('body-parser');



var app = express();

//cargar archivos de rutas
var project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
//Cualquier peticion que llege lo convertira a json con el siguiente metodo:
app.use(bodyParser.json());

//CORS
//Solucionar los problemas de las peticiones HTTP del front end a la API:
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas (todas las rutas partiran de /api/*)
app.use('/api', project_routes);



//exportar 
module.exports = app;

