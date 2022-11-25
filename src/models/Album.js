const {Schema,model}=require("mongoose");

const AlbumSchema= new Schema({
    _id: {
        
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
    }
    
    
});
//exportar el esquema 
module.exports= model("Album", AlbumSchema );


