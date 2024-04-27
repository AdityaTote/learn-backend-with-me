import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
     shortId: {
        required: true,
        type: String,
        unique: true
     },
     redirectURL: {
        type: String,
        required: true,
        unique: true
     },
     visitHistory: [{ timestamps: {type: Number}}],
},
{timestamps:true})

const URL = mongoose.model("url",urlSchema);

export { URL }