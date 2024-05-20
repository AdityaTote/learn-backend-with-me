import mongoose from "mongoose";

function connectMongoDB (url){
    return mongoose.connect(url);
}

export { connectMongoDB }