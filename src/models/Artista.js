const {Schema,model}=require("mongoose");

const ArtistaSchema= new Schema({
    _id: {
        type: Number
    },
    
    noDocumento:{
        type: Number,
        trim: true,
        unique:true,

    },
    tipoDocumento:{
        type: String,
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
        type: String,
        trim: true,
    },
    correoArtista:{
        type: String,
        trim: true,
    },
    estadoArtista:{
        type: String,
        trim: true,
    },
    //relacion
    album:[{
        type:Schema.Types.ObjectId,
        ref:'Album'
      }]
    
    
});
//exportar el esquema 
module.exports= model("Artista", ArtistaSchema );


