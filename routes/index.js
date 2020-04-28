const express = require('express');
const router = express.Router();


//ruta raiz
router.get("/", function ( req, res ) {

    return res.send("Hola rolling desde Express");
}

    );

    //RUTAS SECUNDARIAS

    router.use("/libros" ,require('./libros'))




 module.exports = router;
