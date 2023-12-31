const mongoose = require("mongoose");
require("dotenv").config({path: ".env"});
const conectarDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            //opciones no soportadas en Mongoose 6.0
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useFindAndModify: false
        })
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        process.exit(1); // detiene la app
    }
}
module.exports = conectarDB