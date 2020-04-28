const mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const libroSchema = new Schema({

    nombre:{  
        type:String,
        required:true,
        trim:true
      },
    genero:{
        type:String,
        required:true,
        trim:true
    },
    autor:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    },
    imagen:{
        type:String,
        
        trim:true
    },
    creado:{
        type:Date,
        default:Date.now(),

    }

});
module.exports = mongoose.model('Libro', libroSchema)