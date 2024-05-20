import { Router } from "express";

import { handleComment } from "../controllers/comment.controllers.js";

const commentRoute = Router();

commentRoute
    .post("/:blogId",handleComment)

export { commentRoute }