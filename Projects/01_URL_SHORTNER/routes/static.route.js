import { Router } from "express";
import {handleResult} from "../controllers/url.controllers.js"
// import {URL} from "../models/url.models.js"

const staticRouter = Router()

staticRouter.get("/",handleResult)

export { staticRouter };