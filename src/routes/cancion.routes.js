const {Router}=require("express");
const rutasCancion=Router();
const ctrCanc=require("../controllers/cancionControllers")
const fecha=Date.now();


rutasCancion.get('/', ctrCanc.obtener);

rutasCancion.get('/:id', ctrCanc.obtenerid);

rutasCancion.post('/',ctrCanc.add,);
  
rutasCancion.put('/:id',ctrCanc.edit);


module.exports=rutasCancion;