'use strict'

//importamos el modulo express
var express = require('express');
//importamos el controlador donde se encuentra el objeto de las respuestas
var ProjectController = require('../controllers/project');
//importar el modulo de rutas para crear las rutas de las peticiones
var router = express.Router();

//midleware multipart: para la subida de archivos al backend
var multipart = require('connect-multiparty');
//Especificar la ruta del directorio  donde se van a guardar los archivos
var multipartMiddleware = multipart({uploadDir:'./uploads'});

//rutas de las peticiones con los metodos de peticion http
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
//:id pasar el parametro de la id que se pondra por url al hacer la peticion
router.get('/get-project/:id',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/deleteproject/:id',ProjectController.deleteProject);
router.post('/upload-image/:id',multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

//expotamos el modulo de la configuracion para cargarlo en el app.js
module.exports = router;

