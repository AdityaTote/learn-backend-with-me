import express from "express";

import { handleUserSignup ,
        handleUserLogin } from "../controllers/user.controllers.js";

const userRoute = express.Router();

userRoute.route("/signup").post(handleUserSignup);

userRoute.route("/login").post(handleUserLogin);

export { userRoute }