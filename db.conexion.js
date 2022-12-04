const mongoose = require('mongoose');
const conexionBD=async()=>{
    
    try{
        const DB=await mongoose.connect('mongodb+srv://milenaaris:milenaaristi@cluster0.4oqykhq.mongodb.net/Disquera?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;