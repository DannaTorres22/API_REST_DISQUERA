const {Router}=require("express");
const rutasAlbum=Router();
const ctrAlb=require("../controllers/album.Controllers")
const fecha=Date.now();


rutasAlbum.get('/', ctrAlb.obtener);

rutasAlbum.get('/:id', ctrAlb.obtenerid);

rutasAlbum.post('/',ctrAlb.add,);
  
rutasAlbum.put('/:id',ctrAlb.edit);


module.exports=rutasAlbum;