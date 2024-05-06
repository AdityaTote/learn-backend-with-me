import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    shortLink: {
        type: String,
        required: true,
        unique: true
    },
},{timestamps: true});

const Url = mongoose.model("url", urlSchema);

export { Url };