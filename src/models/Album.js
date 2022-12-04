const {Schema,model}=require("mongoose");

const AlbumSchema= new Schema({
    _id: {
        type: Number
    },
    
    nombreAlbum:{
        type: String,
        trim: true,

    },
    anioPublicacion:{
        type: String,
        trim: true,
    },
    estadoAlbum:{
        type: String,
        trim: true,
    },
    
    cancion:[{
        type:Schema.Types.Number,
        ref:'Cancion'
      }],
    artista:[{
        type:Schema.Types.Number,
        ref:'Artista'
      }]
   
    
});
//exportar el esquema 
module.exports= model("Album", AlbumSchema );


