const {Schema,model}=require("mongoose");

const ArtistaSchema= new Schema({
    _id: {
        
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
module.exports= model("Artista", ArtistaSchema );


