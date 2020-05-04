const mongoose = require('mongoose');


const AutorSchema = mongoose.Schema({

    nombre:{
        type:String,
        require:true,
        trim:true

    },
    edad:{
        type:String,
        require:true,
        trim:true                  

    },
    descripcion:{
        type:String,
        require:true,
        trim:true

    },
    imagen:{
        type:String,
        trim:true

    },

    libros:{
        type:String,
        trim:true
    },

    
    creado:{
        type:Date,
        default:Date.now(),


    }

});
module.exports = mongoose.model('Autor', AutorSchema)