const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
/*const rutasCancion = require('./routes/cancion.routes');
const rutasArtista=require('./routes/artista.routes');
const rutasAlbum=require('./routes/album.routes')*/
const app = express()

require('dotenv').config()
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-disquera");
app.set("port",process.env.PORT || 5000);
app.set("host",process.env.HOST || 'localhost');


//Midlewares
app.use(express.json());
app.use(morgan("dev"));

/*Llamado de rutas

app.use(express.static('public'));

app.use('/public', express.static('public/img'));

app.use("/cancion",rutasCancion);
app.use("/artista",rutasArtista);
app.use("/album",rutasAlbum);*/

module.exports=app;