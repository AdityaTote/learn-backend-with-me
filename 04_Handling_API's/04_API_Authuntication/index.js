import express from "express";
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "JohnDoe69";                                       //Entre your username
const yourPassword = "12345";                                           //Entre your password 
const yourAPIKey = "234af9d4-defe-401f-834b-cff7ca301e54";              //Enter your generated API_KEY
const yourBearerToken = "0608f2a4-df31-4a3a-a00b-02c2d0a29e5d";         //Entre your generated Beater_Token 

app.get("/",(req,res) => {
    res.render("index.ejs",{ content: "API Response"});
});
app.get("/noAuth", async (req,res) => {
    try{
        const response = await axios.get(`${API_URL}/random`);
        const result = JSON.stringify(response.data);
        console.log(result);
        res.render("index.ejs",{content: result});

    } catch (error) {
        console.error(`Failed to make request:${error.message}`);
        res.render("index.ejs",{ error: error.message})
    }
});
app.get("/basicAuth", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/all?page=2", {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      });
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  app.get("/apiKey", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/filter", {
        params: {
          score: 5,
          apiKey: yourAPIKey,
        },
      });
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
// th object below is of  bearerToken it is another apporach for writing.
const config ={
  headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    }
}
app.get("/bearerToken",async (req,res) => {
    try {
        const response = await axios.get(`${API_URL}/secrets/2`,config);
        const result = JSON.stringify(response.data);
        res.render("index.ejs",{content: result})
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});
