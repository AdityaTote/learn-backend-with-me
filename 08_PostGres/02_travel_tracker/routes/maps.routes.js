import { Router } from "express";

import {
        handleVisitedCountryDisplay,
        handleNewCountryAdd
    } from "../controllers/maps.controllers.js"

const displayRouter = Router()

displayRouter
    .get('/',handleVisitedCountryDisplay)
    .post("/add",handleNewCountryAdd)

export { displayRouter }