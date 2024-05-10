import express from "express";
import pg from "pg";

const port = 3000;
const app = express();
const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"capital-flag" ,
    password:"12345",
    port: 5432
});

db.connect();

let quiz = [];

db.query("SELECT * FROM capitals",(err,res) => {
    if(err){
        console.error("ERROR",err.stack);
    } else {
        quiz = res.rows;
        nextQuestion();
    }
    db.end();
})

let totalCorrect = 0;
let currentQuestion = {};

function nextQuestion() {
    const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
    currentQuestion = randomCountry;
}

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", async(req, res) => {
    totalCorrect = 0;
    await nextQuestion();
    res.render("index.ejs", { question: currentQuestion });
});

app.post("/submit",(req,res) => {
    let answer = req.body["answer"];
    let isCorrect = false;
    if(currentQuestion.capital.toLowerCase() === answer.toLowerCase()){
        totalCorrect++;
        isCorrect = true;
    }
    nextQuestion();
    res.render("index.ejs",{
        question: currentQuestion,
        wasCorrect: isCorrect,
        totalScore: totalCorrect
    })
});

app.listen(port,() => {
    console.log(`Server is listeing on: http://localhost:${port}`);
});