import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "https://secrets-api.appbrewery.com";

const YourToken = "0608f2a4-df31-4a3a-a00b-02c2d0a29e5d";      // Baearer token 
const config = {                                  // config file for all http response 
    headers: {
        Authorization:`Bearer ${YourToken} ` 
    },
};

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res) => {
    res.render("index.ejs", { content: "API Response"});
});

app.post('/get-secret',async (req,res) => {
    const id = req.body["id"];
    try {
        const response = await axios.get(`${API_URL}/secrets/${id}`, config);
        const result = JSON.stringify(response.data);
        res.render("index.ejs",{ content: result});
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
});
app.post('/post-secret',async (req,res) => {
    const id = req.body["id"];
    const secret = req.body["secret"];
    const score = req.body["score"];
    try {
        const response = await axios.post(`${API_URL}/secrets`,{
            secret: secret,
            score: score
        }, config);
        const result = JSON.stringify(response)
        res.render("index.ejs",{ content: result})
        
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.message) });
    }
});
app.post('/put-secret',async (req,res) => {
    const id = req.body["id"];
    const secret = req.body["secret"];
    const score = req.body["score"];
    try {
        const response = await axios.put(`${API_URL}/secrets/${id}`,{
            secret: secret,
            score: score
        },config);
        const result = JSON.stringify(response.data);
        res.render("index.ejs",{ content: result })
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.message) });
    }
});
app.post('/patch-secret', async (req,res) => {
    const id = req.body["id"];
    const secret = req.body["secret"];
    const score = req.body["score"];
    try {
        const response = await axios.patch(`${API_URL}/secrets/${id}`,{
            secret: secret,
            score: score
        },config);
        const result = JSON.stringify(response.data);
        res.render("index.ejs",{ content: result});
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.message) });
    }
});
app.post('/delete-secret',async (req,res) => {
    const id = req.body["id"];
    const secret = req.body["secret"];
    const score = req.body["score"];
    try {
        const response = await axios.delete(`${API_URL}/secrets/${id}`,config);
        const result = JSON.stringify(response.data);
        res.render("index.ejs",{ content: result });
    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.message) });
    }
});

app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});