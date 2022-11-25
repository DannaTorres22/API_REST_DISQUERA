const {Router}=require("express");
const rutasArtista=Router();
const ctrArt=require("../controllers/artistaControllers")
const fecha=Date.now();


rutasArtista.get('/', ctrArt.obtener);

rutasArtista.get('/:id', ctrArt.obtenerid);

rutasArtista.post('/',ctrArt.add,);
  
rutasArtista.put('/:id',ctrArt.edit);


module.exports=rutasArtista;