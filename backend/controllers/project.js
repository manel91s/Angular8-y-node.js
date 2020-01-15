'use strict'
//importar el modelo de project donde se encuentra el Schema de la bd
var Project = require('../models/project');
//importar libreria file system para borrar archivos o comprobar el sistema de archivos
var fs = require('fs');
//modulo para cargar rutas fisicas de nuestro sistema de archivos
var path = require('path');

var controller = {
    //Prueba de respuesta de peticion en /home
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        })
    },
    //Prueba de respuesta de peticion en /test
    test: function (req, res) {
        return res.status(200).send({
            message: "Soy el metodo o accion test del controlador de project"
        })
    },
    //Insertar un documento(campos) en la base de datos
    saveProject: function (req, res) {

        //Instanciamos el objecto del projecto
        var project = new Project();
        //guardamos los campos de las peticiones del cuerpo al objeto project
        var params = req.body;
        //seteamos los campos del objeto 
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        //guardar los datos del objeto
        project.save((err, projectStored) => {
            //Si se produce un error
            if (err) return res.status(500).send({ message: 'Error al guardar el documento' });

            //En caso de que no se guarda en el projectStored la peticion
            if (!projectStored) return res.status(404).send({ message: 'No se ha podido guardar el projecto' });

            //En caso de que vaya bien que devuelva la respuesta 
            return res.status(200).send({ project: projectStored });
        });
    },
    //Consultar una id en la base de datos
    getProject: function (req, res) {

        //Gurdamos la id de la peticion en la variable projectId
        var projectId = req.params.id;



        //buscar en el objeto de la base de datos la id de la peticion
        Project.findById(projectId, (err, project) => {
            //En caso de error :
            if (err) return res.status(500).send({ mesagge: 'Error al devolver los datos' });
            //En caso de que no exista:
            if (!project) return res.status(404).send({ message: 'El proyecto no existe' });
            //En caso de que todo aiga ido bien que devuelva la respuesta
            return res.status(200).send({ project });
        })


    },
    //consultar todos los campos del documento (tabla) de la base de datos
    getProjects: function (req, res) {
        //De esta manera sacamos todo los documentos de la base de datos, OJO: Si queremos hacer una condicion dentro del find se pondrian los parametros para sacar ese campo en concreto : project.find({description:***})
        Project.find({}).exec((err, projects) => {
            //En caso de error :
            if (err) return res.status(500).send({ mesagge: 'Error al devolver los datos' });
            //En caso de que no exista:
            if (!projects) return res.status(404).send({ message: 'No hay projectos que mostrar' });
            //En caso de que todo aiga ido bien que devuelva la respuesta
            return res.status(200).send({ projects });

        });

    },
    //Actualizar un documento de la base de datos
    updateProject: function(req,res) {
        //Guardamos la id de la peticion en la variable
        var projectId = req.params.id;
        //guardamos todos los datos de la petición en la variable (Valores nuevos que se actualizaran)
        var update = req.body;

        //new:true es para que nos devuelva el objeto nuevo actualizado, OJO: Si no lo ponemos devolvera el objeto antiguo, en la respuesta. (en la base de datos actualizaria los datos igualmente).

        //find y update pasamos por parametro la id del cuerpo y todo los datos del cuerpo de la peticion.
        Project.findByIdAndUpdate(projectId,update, {new:true}, (err,projectUpdated)=>{
            //En caso de error 
            if(err) return res.status(500).send({message:'Eroor al actualizar'});
            //En caso de que no exista:
            if(!projectUpdated) return res.status(404).send({message:'No se existe el proyecto para actualizar'});
            //En caso de que todo aiga ido bien devolvera la respuesta con los campos actualizados.
            return res.status(200).send({project: projectUpdated});
        }) 
    },
    //Eliminar documentos
    deleteProject: function(req,res) {
        var projectId= req.params.id;

        Project.findByIdAndRemove(projectId, (err,projectRemoved) => {
             //En caso de error 
             if(err) return res.status(500).send({message:'Error al borrar'});
             //En caso de que no exista:
             if(!projectRemoved) return res.status(404).send({message:'No se existe el proyecto para borrar'});
             //En caso de que todo aiga ido bien devolvera la respuesta con los campos actualizados.
             return res.status(200).send({project: projectRemoved});
        });
    },
    //Subir ficheros con el connect mutiparty
    uploadImage: function(req,res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        //Si la peticion contiene algun archivo
        if(req.files) {
            //----guardar la imagen en la base de datos---

            //Recoger la ruta de la imagen local de la petición
            var filePath = req.files.image.path;
            //partir la ruta desde '\\' y recoger el nombre.jpg
            var fileSplit = filePath.split('\\');
            //recojer el nombre de la imagen unica
            var fileName = fileSplit[1];
            //recoger asta el indice de extension de la imagen
            var extSplit = fileName.split('\.');  
            //recoger el nombre de la extension de la imagen unica
            var fileExt = extSplit[1];

            //comprobacion de extensión al subir al subir al backend
            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt =='gif') {
                
        //Buscar y actualizar mediante la id el objeto Project y añadir el valor de la imagen en la propieda del objeto image
        //new:true devuelve en la respuesta los nuevos valores del document actualizados.
            Project.findByIdAndUpdate(projectId, {image:fileName}, {new:true}, (err,projectUpdated) => {
                //En caso de error 
                if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

                //En caso de que no exista
                if(!projectUpdated) return res.status(404).send({message:'El proyecto no existe y no se ha asignado la imagen'});
            //en caso de que todo aiga ido bien
            return res.status(200).send({
                project: projectUpdated
            });
            });
            //borrar la ruta entera de la imagen en caso de que la extension no sea correcta
            }else{
                
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message: 'La extensión no es valida'});
                });
            }

        }else {
            return res.status(200).send({
                mesage: fileName
            });
        }
    },
    getImageFile: function(req, res) {
   
        //Recoger en una variable el archivo que recibimos de la peticion
        var file = req.params.image;
        //concatenamos el nombre del archivo que recibimos con la ruta de directorio donde se guardan las imagenes cuando suben el proyecto
        var path_file = './uploads/' + file;

        //comprobar si el archivo en la ruta existe
        fs.exists(path_file, (exists) =>  {
            if(exists) {
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message: "No existe la imagen..."
                });
            }
        });
  

    }

};

module.exports = controller;