import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// promises approch use in older node version disadv: affect readabilty and while taking argument takes sometime err ,f there are many nested promises, the code can become difficult to read and maintain.
/*app.get("/",(req,res) => {                       
    axios.get("https://bored-api.appbrewery.com/random")
    .then((response) => {
        const result = response.data;
        res.render("index.ejs",{data: result});
    })
    .catch((err) => {
        console.error("Failed to make request:",err.message);
        res.render("index.ejs",{error: err.message});
    });
    
});*/
app.get("/",async (req,res) => {
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        res.render("index.ejs", { data: result });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
})

// promises approch use in older node version disadv: affect readabilty and while taking argument takes sometime err ,f there are many nested promises, the code can become difficult to read and maintain.
/*app.post("/",(req,res) => {
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
});*/
app.post("/",async (req,res) => {
    console.log(req.body);
    const type = req.body["type"];
    const participants = req.body["participants"];
    try {
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
        const result = response.data;
        console.log(result);
        res.render("index.ejs",{ data: result[Math.floor(Math.random() * result.length)] })
      } catch (error) {
        console.error(`Failed to make request:${err.message}`);
        res.render("index.ejs",{ error: "No activitiy is found of your certiria"});
      }
})

app.listen(port,() => {
    console.log(`Server is listeing on : http://localhost:${port}`);
});