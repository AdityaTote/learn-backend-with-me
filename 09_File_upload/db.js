import mongoose from "mongoose";

async function connect(url){
    try{
        await mongoose.connect(url)
        console.log(`MONGODB CoNNECTED`);
    }catch(error){
        console.log(`ERROR:${error.message}`);
    }
};

export { connect }