'use strict'

//Para importar modelos usamos moongose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Crear el schema de la base de datos creada
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String

})

//exportar el modulo para posteriormente importarlo para poder hacer saves en la base de datos
module.exports = mongoose.model('Project', ProjectSchema);
// *** OJO: Aunque como nombre tenemos ''Project'' mongoos lo convierte a minuscula y lo pluraliza como esta en la base de datos.