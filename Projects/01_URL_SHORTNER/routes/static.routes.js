import { Router } from "express";
import {handleResult, handleAllResult} from "../controllers/url.controllers.js"
import { restriTo} from "../middlewares/auth.middlewares.js"

const staticRouter = Router()

staticRouter.get("/admin/urls",restriTo(["ADMIN"]), handleAllResult)

staticRouter.get("/",restriTo(["NORMAL","ADMIN"]),handleResult)

staticRouter.get("/signup",(req,res) => {
    res.render("signup");
})

staticRouter.get("/login",(req,res) => {
    res.render("login");
})


export { staticRouter };