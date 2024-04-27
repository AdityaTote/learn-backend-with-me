import mongoose from "mongoose";

async function connectMongoDb (url) {
    return await mongoose.connect(url);
}

export { connectMongoDb }