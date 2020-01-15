'use strict'


//Conexion a la base de datos de mongoDB

//acceder al modulo moongose 
var mongoose = require('mongoose');
//cargar el archivo de configuracion de express
var app = require('./app');

//cargar el puerto del servidor
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        //LA respuesta si se ha realizado la conexion con exito.
        .then(()=>{
            console.log("Conexion a la base de datos establecida con exito");

            //Creacion del servidor
            //cargar el metodo de express y pasar el puerto
            app.listen(port, () => {
                //Devolver el mensaje si ha ido correctamente en la consola
                console.log("Servidor corriendo correctamente en la url: localhost:3700");
            })


        })
        //Capturamos el error y lo printamos en consola en caso de que lo aiga.
        .catch(error => console.log(error));