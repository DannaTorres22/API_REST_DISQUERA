const Cancion= require('../models/Artista');
//primera accion 
//funcion asincrona de listado 
//list es el nombre de la accion 

exports.list = async (req, res)=>{

    //await: mientras se ejecuta el find lo espere
    //metodo find nos proporciona parametros para poder hacer un filtrado
    try{
        const artista= await Artista.find({});
    res.json(artista);
    } catch(error){
        console.log(error)
        res.send(error);
        next();
    }
    
;}