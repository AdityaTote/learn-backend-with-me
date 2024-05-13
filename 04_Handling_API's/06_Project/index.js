import express from "express";
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/",async (req,res) => {
    try {
        const response = await axios.get(`${API_URL}/random`);
        const secret = response.data.secret;
        const user = response.data.username;

        res.render("index.ejs",{ 
            secret: secret ,
            user: user
         });
    } catch (error) {
        res.render("index.ejs",{ secret: error.message});     
    }
});


app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});