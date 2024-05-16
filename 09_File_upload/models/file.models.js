import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    file_Path: {
        type: String
    },
});

const File = mongoose.model("file", fileSchema);

export {File}