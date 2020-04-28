const express = require("express");
const router = express.Router();

const Libro = require("../models/Libro");

//TRAER TODOS LOS LIBROS

router.get("/", async function (req , res) {
 
  
  
  
  const libros = await Libro.find({});

                return res.json({ libros });

});


router.get("/:nombre", async function (req , res) {
 
  
  const { nombre} = req.params
  console.log(nombre)
  const libros = await Libro.find({nombre});

                return res.json({ libros });

});

//TRAER UN LIBRO POR ID

router.get("/:id", async function (req, res) {
  const id = req.params.id;

  const libro = await Libro.findById(id);

  return res.json({ libro });
});

//CARGAR UN LIBRO

router.post("/", async function (req, res) {
  const { nombre, genero, autor, descripcion, imagen } = req.body;

  const libro = new Libro({ nombre, genero, autor, descripcion, imagen });

  const response = await Libro.findOne({
    nombre,
    genero,
    autor,
    descripcion,
    imagen,
  });
  console.log(response);
  if (!response) {
    libro.save();
    return res.json({ libro });
  }

  res.json({ message: "libro ya existe" });
});

//EDITAR UN LIBRO

router.put("/", async function (req, res) {
  const {
    _id,
    Nombre,
    Genero,
    Autor,
    Descripcion,
    Imagen,
  } = req.body;

  const response = await Libro.findByIdAndUpdate(_id, {
    nombre: Nombre,
    genero: Genero,
    autor: Autor,
    descripcion: Descripcion,
    imagen: Imagen,
  });

  if (response) {
    res.json({ message: "libro actualizado exitosamente" });
  }

  res.json({ message: `el libro  no se  encontro` });
});

//ELIMINAR UN LIBRO

router.delete("/:id", async function (req, res) {
  const { id } = req.params;

  const response = await Libro.findByIdAndDelete(id);

  if (response) {
    console.log(response);
    res.json({ message: "Libro eliminado" });
  } else {
    res.json({ message: "No se encontro el libro" });
  }
});

module.exports = router;
