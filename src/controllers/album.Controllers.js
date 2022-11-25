const Album= require('../models/Album');
//primera accion 
//funcion asincrona de listado 

//obtener cancion

exports.obtener = async (req, res) => {
    try {
      const album = await Album.find().populate('cancion',{
        "_id": 1,
          "nombreCancion": 1,
          "fechaGrabacion": 1,
          "duracionCancion": 1,
          "estadoCancion": 1
      });
      res.status(200).json(album);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const cancion = await Cancion.findById(id).populate('cancion',{
        "_id": 1,
          "nombreCancion": 1,
          "fechaGrabacion": 1,
          "duracionCancion": 1,
          "estadoCancion": 1
      });;
      res.status(200).json(cancion);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }
  //obtener artista
  exports.obtener = async (req, res) => {
    try {
      const album = await Album.find().populate('artista',{
        "_id": 1,
          "noDocumento": 1,
          "tipoDocumento": 1,
          "nombreArtista": 1,
          "apellidoArtista": 1,
          "apellidoArtistico": 1,
          "feNaciemintoArtista": 1,
          "emailArtista": 1,
          "estadoArtista": 1

      });
      res.status(200).json(album);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const album = await Album.findById(id).populate('artista',{
        "_id": 1,
        "noDocumento": 1,
        "tipoDocumento": 1,
        "nombreArtista": 1,
        "apellidoArtista": 1,
        "apellidoArtistico": 1,
        "feNaciemintoArtista": 1,
        "emailArtista": 1,
        "estadoArtista": 1
      });;
      res.status(200).json(album);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }



  //agregar cancion 

  exports.add = async (req, res) => {
    try {
     
      const newAlbum = new Album(req.body,req.file)
      console.log(req.file);
      await newAlbum.save();
      console.log(newAlbum);
      res.json({ msj: "el album se registro exitosamente", id: newAlbum._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

  exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newAlbum = new Album(req.body,req.file)
      console.log(req.file);
      //console.log(`El id que se va a cambiar estado es ${id}`);
      const cambioAlbum = await Album.findByIdAndUpdate(id, newAlbum);
      res.json({ msj: " el album se actualizó exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }
  