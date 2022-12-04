//esto es un esquema
const {Schema,model}=require("mongoose");
const CancionSchema= new Schema({
    _id: {
        type: Number
    },
    
    nombreCancion:{
        type: String,
        trim: true,
        unique:true,

    },
    fechaGrabacion:{
        type: String,
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
    album:[{
        type:Schema.Types.ObjectId,
        ref:'Album'
      }]
    
});

//exportar el esquema 
module.exports= model("Cancion", CancionSchema );
