const express = require('express')

const router = express.Router();
const cancionControllers=require('../controllers/cancionControllers');
module.exports = function(){
    //primera ruta 
    //lista de todas las canciones 
    router.get('/cancion', cancionControllers.list);
    return router;/*
    router.get('/Artista', artistaControllers.list);
    return router;*/

}
