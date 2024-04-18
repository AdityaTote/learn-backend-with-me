import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res) => {
    axios.get("https://bored-api.appbrewery.com/random")
    .then((response) => {
        const result = response.data;
        res.render("index.ejs",{data: result});
    })
    .catch((err) => {
        console.error("Failed to make request:",err.message);
        res.render("index.ejs",{error: err.message});
    });
});

app.post("/",(req,res) => {
    console.log(req.body);
    const type = req.body["type"];
    const participants = req.body["participants"];
    axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`)
    .then((response) => {
        const result = response.data;
        console.log(result);
        res.render("index.ejs",{ data: result[Math.floor(Math.random() * result.length)] })
    })
    .catch((err) => {
        console.error(`Failed to make request:${err.message}`);
        res.render("index.ejs",{ error: "No activitiy is found of your certiria"});
    });
});

app.listen(port,() => {
    console.log(`Server is listeing on : http://localhost:${port}`);
});