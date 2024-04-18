import express, { urlencoded } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;
const app = express();
let bandName;


function bandNameGen (req ,res,next) {
    bandName =   req.body["street"] + req.body["pet"];
    next();
};

app.use(bodyParser.urlencoded({extended: true}))    // middleware order matter this should be first
app.use(bandNameGen);

app.get('/',(req,res) => {
    res.sendFile(__dirname +"/public/index.html")
});

app.post('/submit',(req,res) => {
    // res.send(`<h2>YOUR BAND NAME IS:</h2><br><b>${req.body.street}${req.body.pet}</b>`); // bad practice use middleware for it.
    res.send(`<h1>BAND NAME GENRATOR</h1><h2>${bandName}</h2>`)
})

app.listen(port,() => {
    console.log(`Server is listening on http://localhost:${port}`);
});