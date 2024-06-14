import { Router } from "express";

import { handleComment } from "../controllers/comment.controllers.js";
import { checkAuthCookie } from "../middlewares/auth.middlewares.js"

const commentRoute = Router();

commentRoute.use(checkAuthCookie());

commentRoute
    .post("/:blogId",handleComment)

export { commentRoute }