const Libro = require('../models/Libro');
const Autor =require('../models/Autor');

//TRAER TODOS LOS LIBROS

 exports.TraerLibros = async function (req , res) {
 
  
  
  
    const libros = await Libro.find({});
  
                  return res.json({ libros });
  
  };
  

  //traer libro por autor 
exports.TraerLibrosAutor = async function (req , res) {
 
  
    const { autor} = req.params
    console.log(req.query)
    const libros = await Libro.find({autor});
  
                  return res.json({ libros });
  
  };

  //TRAER UN LIBRO POR ID

exports.TraerLibrosId = async function (req, res) {
    const id = req.params.id;
  
    const libro = await Libro.findById(id);
  
    return res.json({ libro });
  };
  
  //CARGAR UN LIBRO
  
  exports.CargarLibro = async function (req, res) {

///extraer el autor y comprobar si existe
const { autor } = req.body;

    console.log(autor)
const existeAutor = await Autor.findById(autor);

if (!existeAutor) {
  return res.status(404).json({msg:'autor no encontrado'});
}

  // creamos el libro 

    const { nombre, genero, publicado, imagen } = req.body;
  
    const libro = new Libro({ nombre, genero, publicado, imagen ,autor});
  
    const response = await Libro.findOne({
      nombre,
    
      autor,
      
     
    });
    console.log(response);
    if (!response) {

      libro.save();
      return res.json({ libro });
    }
  
    res.json({ message: "libro ya existe" });
  };
  
  //EDITAR UN LIBRO
  
  exports.EditarLibro = async function (req, res) {
    const {
 
      _id,
      nombre,
      genero,
      autor,
      publicado,
      imagen,
    } = req.body;
  
    const response = await Libro.findByIdAndUpdate(_id, {
      nombre: nombre,
      genero: genero,
      publicado: publicado,
      imagen: imagen,
    });
  
    if (response) {
      res.json({ message: "libro actualizado exitosamente" });
    }
  };
  
  //ELIMINAR UN LIBRO
  
 exports.BorrarLibro = async function (req, res) {
    const { id } = req.params;
  
    const response = await Libro.findByIdAndDelete(id);
  
    if (response) {
      console.log(response);
      res.json({ message: "Libro eliminado" });
    } else {
      res.json({ message: "No se encontro el libro" });
    }
  };