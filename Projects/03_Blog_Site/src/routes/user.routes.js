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
    .route("/login")
    .get(handleLoginDisplay)
    .post(handleLoginUser)

userRoute
    .route("/signup")
    .get(handleSignupDisplay)
    .post(handeSignupUser)

userRoute
    .route("/logout")
    .get(handleUserLogout)


export { userRoute }