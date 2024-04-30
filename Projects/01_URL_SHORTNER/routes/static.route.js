import { Router } from "express";
// import {handleURLTable} from "../controllers/url.controllers.js"
import {URL} from "../models/url.models.js"

const staticRouter = Router()

staticRouter.get("/",async (req,res)=> {
    const result = await URL.find({})
    res.render("home",{
      urls: result
    })
  })

export { staticRouter };