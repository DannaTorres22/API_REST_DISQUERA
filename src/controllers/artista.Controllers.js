const Artista= require('../models/Artista');
//primera accion 
//funcion asincrona de listado 

exports.obtener = async (req, res) => {
    try {
      const artista = await Artista.find().populate('album',{
        "_id": 1,
          "nombreAlbum": 1,
          "anio publicacion": 1,
          "estadoAlbum": 1
      });
      res.status(200).json(artista);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const artista = await Artista.findById(id).populate('album',{
        "_id": 1,
        "nombreAlbum": 1,
        "anio publicacion": 1,
        "estadoAlbum": 1
      });;
      res.status(200).json(artista);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  //agregar artista

  exports.add = async (req, res) => {
    try {
     
      const newArtista = new Artista(req.body,req.file)
      console.log(req.file);
      await newArtista.save();
      console.log(newArtista);
      res.json({ msj: "el artista se registro exitosamente", id: newArtista._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }


  exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newArtista = new Artista(req.body,req.file)
      console.log(req.file);
      //console.log(`El id que se va a cambiar estado es ${id}`);
      const cambioArtista = await Artista.findByIdAndUpdate(id, newArtista);
      res.json({ msj: " el artista se actualizó exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }
  

