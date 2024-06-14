import { Router } from "express";

import { checkAuthCookie } from "../middlewares/auth.middlewares.js"
import { handleAddBlogPageDisplay,
         handleAddBlog,
         handleBlogById } from "../controllers/blog.controllers.js"
import { upload } from "../utils/upload.utils.js"

const blogRoute = Router();

blogRoute.use(checkAuthCookie());

blogRoute
 .get("/add-blog",handleAddBlogPageDisplay)
 .post("/add-blog", upload.single("coverImg"), handleAddBlog)
 .get("/:id", handleBlogById)
 

export { blogRoute }