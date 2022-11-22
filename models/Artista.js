const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const ArtistaSchema= new Schema({
    id: {
        
    },
    
    noDocumento:{
        type: String,
        trim: true,
        unique:true,

    },
    tipoDocumento:{
        type: Date,
        trim: true,
    },
    nombreArtista:{
        type: String,
        trim: true,
    },
    apellidoArtista:{
        type: String,
        trim: true,
    },
    nombreArtistico:{
        type: String,
        trim: true,
    },
    feNaciemintoArtista:{
        type: Date,
        trim: true,
    },
    correoArtista:{
        type: String,
        trim: true,
    },
    estadoArtista:{
        type: String,
        trim: true,
    }
    
    
});
//exportar el esquema 
module.exports= mongoose.model("Artista", ArtistaSchema );


