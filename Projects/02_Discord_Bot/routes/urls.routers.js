import { Router } from "express";

import { handleURLShort , handleUrlDisplay} from "../controllers/urls.controllers.js";

const urlRoute =  Router();

// Inputs the url and make it short
urlRoute.post("/create",handleURLShort)

// dispaly the short url 
urlRoute.get("/:shortId",handleUrlDisplay)

export { urlRoute }