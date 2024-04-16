import express from "express";

const port = 3000;

const app = express();

const logger = (req,res,next) => {              // creating own middleware
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next()
};

app.use(logger);

app.get('/',(req,res) => {
    res.send("<h1>Wlc</h1>")
});

app.listen(port ,() => {
    console.log(`Server is listening on http://localhost:${port}`);
});