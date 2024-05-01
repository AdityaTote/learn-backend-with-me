import { Router } from "express";
import {handleResult} from "../controllers/url.controllers.js"

const staticRouter = Router()

staticRouter.get("/",handleResult)

staticRouter.get("/signup",(req,res) => {
    res.render("signup");
})

staticRouter.get("/login",(req,res) => {
    res.render("login");
})


export { staticRouter };