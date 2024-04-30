import { Router } from "express";
import {handleResult} from "../controllers/url.controllers.js"

const staticRouter = Router()

staticRouter.get("/",handleResult)

export { staticRouter };