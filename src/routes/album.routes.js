const {Router}=require("express");
const rutasAlbum=Router();
const ctrAlb=require("../controllers/album.Controllers")
const fecha=Date.now();

//rutas

//obtener todos los albums
rutasAlbum.get('/', ctrAlb.obtener);

//obtener por id
rutasAlbum.get('/:id', ctrAlb.obtenerid);
//registrar album
rutasAlbum.post('/',ctrAlb.add,);
  //actualizar album
rutasAlbum.put('/:id',ctrAlb.edit);


module.exports=rutasAlbum;