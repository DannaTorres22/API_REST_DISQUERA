const {Router}=require("express");
const rutasArtista=Router();
const ctrArt=require("../controllers/artista.Controllers")
const fecha=Date.now();

//obtener todos los artistas
rutasArtista.get('/', ctrArt.obtener);
//obtener por id
rutasArtista.get('/:id', ctrArt.obtenerid);
//registrar artista
rutasArtista.post('/',ctrArt.add,);
//actualizar informacion del artista
rutasArtista.put('/:id',ctrArt.edit);


module.exports=rutasArtista;