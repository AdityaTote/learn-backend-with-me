import { Router } from "express";
import {handleGenerateNewShortURL,
        handleLinkClick,
        handleGetAnalytic} from "../controllers/url.controllers.js"

const urlRouter = Router();



urlRouter.route("/")
.post(handleGenerateNewShortURL)

urlRouter.route("/:shortId")
.get(handleLinkClick)

urlRouter.route("/analytics/:shortId")
.get(handleGetAnalytic)

export { urlRouter };