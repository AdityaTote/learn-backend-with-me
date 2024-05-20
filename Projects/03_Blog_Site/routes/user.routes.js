import { Router } from "express";

import {
    handleLoginDisplay,
    handleLoginUser,
    handleSignupDisplay,
    handeSignupUser,
    handleUserLogout
} from "../controllers/user.controllers.js"

const userRoute = Router();

userRoute
 .get('/login', handleLoginDisplay)
 .post('/login',handleLoginUser)
 .get('/signup', handleSignupDisplay)
 .post('/signup', handeSignupUser)
 .get('/logout', handleUserLogout)


export { userRoute }