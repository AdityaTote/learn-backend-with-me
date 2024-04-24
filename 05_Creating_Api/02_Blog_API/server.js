import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = 4000;
const app = express();
const API_URL = "http://localhost:3000"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//rendering All Blog page
app.get("/",async (req,res) => {
    try {
        const response = await axios.get(`${API_URL}/allposts`);
        res.render("index.ejs",{posts: response.data})
    } catch (error) {
        res.render("index.ejs",{posts: error.message})
    }
});
// Page for Create post
app.get("/new",(req,res) => {
    res.render("modify.ejs",{ heading: "New Post", submit: "Create Post"});
});
//Page for Editing Post
app.get("/edit/:id",async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const response = await axios.get(`${API_URL}/posts/${id}`);
        res.render("modify.ejs",{
            heading: "Edit Post",
            submit: "Update Post",
            post: response.data
        });
    } catch (error) {
        res.json(error.message)
    }
});
// Page for deleting post 
app.get("/api/posts/delete/:id",async (req,res) => {
    
    try {
        const id = parseInt(req.params.id);
        await axios.delete(`${API_URL}/posts/${id}`);
        res.redirect("/");
    } catch (error) {
        res.json(error.message);
    }
});

// Req for Creating new post 
app.post("/api/posts",async (req,res) => {
    try {
        await axios.post(`${API_URL}/newpost`,req.body);
        res.redirect("/");
    } catch (error) {
        res.render("modify.ejs",{post: error.message});
    }
});
//Req for Editing the post 
app.post("/api/posts/:id",async (req,res) => {
    try {
        const id = req.params.id;
        const response = await axios.patch(`${API_URL}/update/${id}`,req.body);
        res.redirect("/");
    } catch (error) {
        res.json(error.message);
    }
});

app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});










app.get("/api/posts/delete/:id", async (req, res) => {
    try {
      await axios.delete(`${API_URL}/posts/${req.params.id}`);
      res.redirect("/");
    } catch (error) {
      res.status(500).json({ message: "Error deleting post" });
    }
  });