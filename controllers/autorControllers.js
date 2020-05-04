const Autor = require('../models/Autor');


//TRAER TODOS LOS AUTORES

 exports.TraerAutores = async function (req , res) {
 
  
  
  
    const autores = await Autor.find({});
  
                  return res.json({ autores });
  
  };
  

  //traer Autor por nombre
exports.TraerAutoresNombre = async function (req , res) {
 
  
    const { nombre} = req.params
    console.log(nombre)
    const autor = await Autor.find({nombre});
  
                  return res.json({ autor });
  
  };

  //TRAER UN Autor POR ID

exports.TraerAutorsId = async function (req, res) {
    const {id} = req.params;
    console.log(id)    

  
    const autor = await Autor.findById(id);
  
    return res.json({ autor });
  };
  
  //CARGAR UN AUTOR
  
  exports.CargarAutor = async function (req, res) {
    const { nombre,edad, imagen ,descripcion} = req.body;
  
    const autor = new Autor({ nombre, edad, imagen,descripcion });
  
    const response = await Autor.findOne({
      nombre,
      edad,
      imagen,
      descripcion
    });
    console.log(response);
    if (!response) {
      autor.save();
      return res.json({ autor });
    }
  
    res.json({ message: "autor ya existe" });
  };
  
  //EDITAR UN Autor
  
  exports.EditarAutor = async function (req, res) {
    const {
      _id,
      nombre,
      edad,
      imagen,
      descripcion
    } = req.body;
  
    const response = await Autor.findByIdAndUpdate(_id, {
      nombre: nombre,
      edad:edad,
      imagen: imagen,
      descripcion:descripcion
    });
  
    if (response) {
      res.json({ message: "autor actualizado exitosamente" });
    }
  
    res.json({ message: `el autor  no se  encontro` });
  };
  
  //ELIMINAR UN AUTOR
  
 exports.BorrarAutor = async function (req, res) {
    const { id } = req.params;
  
    const response = await Autor.findByIdAndDelete(id);
  
    if (response) {
      console.log(response);
      res.json({ message: "Autor eliminado" });
    } else {
      res.json({ message: "No se encontro el autor" });
    }
  };