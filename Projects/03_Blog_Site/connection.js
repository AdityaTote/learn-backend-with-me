import mongoose from "mongoose";

async function connect(url){
    try{
        await mongoose.connect(url);
        console.log("MONGOBD CONNECTED");
    } catch(error){
        console.log("ERR:",error.message);
    }
}

export { connect }