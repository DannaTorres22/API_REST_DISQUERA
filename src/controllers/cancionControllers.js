const Cancion= require('../models/Cancion');
//primera accion 
//funcion asincrona de listado 

exports.obtener = async (req, res) => {
    try {
      const cancion = await Cancion.find().populate('album',{
        "_id": 1,
          "nombreAlbum": 1,
          "anio publicacion": 1,
          "estadoAlbum": 1
      });
      res.status(200).json(cancion);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const cancion = await Cancion.findById(id).populate('album',{
        "_id": 1,
        "nombreAlbum": 1,
        "anio publicacion": 1,
        "estadoAlbum": 1
      });;
      res.status(200).json(cancion);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  //agregar cancion 

  exports.add = async (req, res) => {
    try {
     
      const newCancion = new Cancion(req.body,req.file)
      console.log(req.file);
      await newCancion.save();
      console.log(newCancion);
      res.json({ msj: "la cancion se registro exitosamente", id: newCancion._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

  exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newCancion = new Cancion(req.body,req.file)
      console.log(req.file);
      //console.log(`El id que se va a cambiar estado es ${id}`);
      const cambioCancion = await Cancion.findByIdAndUpdate(id, newCancion);
      res.json({ msj: " la cancion se actualizó exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }
  

