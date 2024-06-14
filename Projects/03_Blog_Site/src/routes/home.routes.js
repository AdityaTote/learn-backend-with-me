import { Router } from "express";
import { Blog } from "../models/blog.models.js"

const homeRoute = Router();

homeRoute.
    get("/",async (req,res) => {

        const allBlog = await Blog.find({});

        res.render("home",{
            user: req.user,
            blogs: allBlog,
        });
    });

export { homeRoute }