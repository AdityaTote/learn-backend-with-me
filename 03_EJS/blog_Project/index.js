import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.sendFile(`${__dirname}/public/test.html`)
})

app.get("/blog/new",(req,res) => {
    res.render("index.ejs")
})

app.get("/blog",(req,res) => {
    const { title, author, content } = req.query;
    res.render("get.ejs",{ 
        title,
        author,
        content
    })
});

app.post("/blog",(req,res) => {
    const { title, author, content } = req.body;
    res.redirect(`/blog?title=${title}&author=${author}&content=${content}`);
});

app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});