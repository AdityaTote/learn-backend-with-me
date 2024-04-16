import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;
const app = express();
let userAuth = false;


const checker = (req,res,next) => {            // MIDDLEWARE
    const password = "12345678"
    let userInput = req.body['password'];
    if(userInput === password){
        userAuth = true
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(checker);

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check',(req,res) => {
    if(userAuth){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect('/');
    }
})

app.listen(port,() => {
    console.log(`Server is listening on http://localhost:${port}`);
});