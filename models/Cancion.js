const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const CancionSchema= new Schema({
    id: {
        
    },
    
    nombreCancion:{
        type: String,
        trim: true,
        unique:true,

    },
    fechaGrabacion:{
        type: Date,
        trim: true,
    },
    duracionCancion:{
        type: String,
        trim: true,
    },
    estadoCancion:{
        type: String,
        trim: true,
    },
    
});
//exportar el esquema 
module.exports= mongoose.model("Cancion", CancionSchema );
