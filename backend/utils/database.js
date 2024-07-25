const mongoose = require("mongoose");


const URI = process.env.MONGODB_URI;
const connetDB = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("Database Connected!");
    }
    catch (error){
        console.log("Database connection failed");
        process.exit(0)
    }
}
module.exports = connetDB;