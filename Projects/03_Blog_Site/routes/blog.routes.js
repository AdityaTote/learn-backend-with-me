import { Router } from "express";

import { handleAddBlogPageDisplay,
         handleAddBlog,
         handleBlogById } from "../controllers/blog.controllers.js"
import { upload } from "../utils/upload.utils.js"

const blogRoute = Router();

blogRoute
 .get("/add-blog",handleAddBlogPageDisplay)
 .post("/add-blog", upload.single("coverImg"), handleAddBlog)
 .get("/:id", handleBlogById)
 

export { blogRoute }