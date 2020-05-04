const express = require("express");
const router = express.Router();

const autorControllers = require("../controllers/autorControllers")


//ruta api/autores
//TRAER TODOS LOS AUTORES

router.get("/", autorControllers.TraerAutores);

//traer autor por nombre
router.get("/:nombre", autorControllers.TraerAutoresNombre );

//TRAER UN AUTOR POR ID

router.get("/:id", autorControllers.TraerAutorsId);

//CARGAR UN AUTOR

router.post("/", autorControllers.CargarAutor);

//EDITAR UN AUTOR

router.put("/", autorControllers.EditarAutor);

//ELIMINAR UN AUTOR

router.delete("/:id", autorControllers.BorrarAutor);

module.exports = router;
