//esto es un esquema
const {Schema,model}=require("mongoose");
const CancionSchema= new Schema({
    _id: {
        
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
module.exports= model("Cancion", CancionSchema );
