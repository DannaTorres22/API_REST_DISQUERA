const Cancion= require('../models/Cancion');
//primera accion 
//funcion asincrona de listado 
//list es el nombre de la accion 

exports.list = async (req, res)=>{

    //await: mientras se ejecuta el find lo espere
    //metodo find nos proporciona parametros para poder hacer un filtrado
    try{
        const cancion= await Cancion.find({});
    res.json(cancion);
    } catch(error){
        console.log(error)
        res.send(error);
        next();
    }
    
;}