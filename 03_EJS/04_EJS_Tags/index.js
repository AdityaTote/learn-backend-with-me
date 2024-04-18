import express from "express";

const port = 3000;
const app = express();

app.get('/',(req,res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple","banana","cherry"],
        htmlContent: "<em>This is some em text</em>"
    }
    res.render("index.ejs",data);
});

app.listen(port,() => {
    console.log(`Server is listening on : http://localhost:${port}`);
});