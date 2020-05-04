const express = require('express');
const router = express.Router();


//ruta raiz
//ruta /api
router.get("/", function ( req, res ) {

    return res.send("Hola rolling desde Express");
}

    );

    //RUTAS SECUNDARIAS

    router.use("/libros" ,require('./libros'));
    router.use("/autores" ,require('./autores'));





 module.exports = router;
