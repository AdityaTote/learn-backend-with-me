import { Router } from "express";

import { 
        handlePage, 
        handleFileUpload 
        } from "../controllers/index.controllers.js";
import { upload } from "../utils/store.utils.js"

const route = Router()

route
    .get("/",handlePage)
    .post("/upload",upload.single("file_upload"),handleFileUpload)

export { route }