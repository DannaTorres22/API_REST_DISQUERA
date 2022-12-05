const {Router}=require("express");
const rutasCancion=Router();
const ctrCanc=require("../controllers/cancion.Controllers")
const fecha=Date.now();

//obtener todos las canciones
rutasCancion.get('/', ctrCanc.obtener);
//obtener por id
rutasCancion.get('/:id', ctrCanc.obtenerid);
//registrar cancion
rutasCancion.post('/',ctrCanc.add,);
 //actualizar informacion de la cancion
rutasCancion.put('/:id',ctrCanc.edit);


module.exports=rutasCancion;