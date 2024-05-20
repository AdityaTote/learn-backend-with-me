import { File } from "../models/file.models.js";

function handlePage(req,res) {
    res.render("index")
};

async function handleFileUpload(req,res){
    
    await File.create({
        file_Path: req.file.path
    });
    return res.redirect("/")
};

export {
    handlePage,
    handleFileUpload,
}