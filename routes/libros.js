const express = require("express");
const router = express.Router();

const libroControllers = require("../controllers/libroControllers")



//TRAER TODOS LOS LIBROS

router.get("/", libroControllers.TraerLibros);

//traer libro por autor
router.get("/:autor", libroControllers.TraerLibrosAutor );

//TRAER UN LIBRO POR ID

router.get("/:id", libroControllers.TraerLibrosId );

//CARGAR UN LIBRO

router.post("/", libroControllers.CargarLibro);

//EDITAR UN LIBRO

router.put("/", libroControllers.EditarLibro);

//ELIMINAR UN LIBRO

router.delete("/:id", libroControllers.BorrarLibro);

module.exports = router;
