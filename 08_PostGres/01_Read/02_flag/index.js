import express from "express";
import pg from "pg";

const port = 3000;
const app = express();
let quiz = [];
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world-flag",
    password: "12345",
    port: 5432
})

let currentQue = {};
let totalCorrect = 0;

function nextQues() {
    const randomQue = quiz[Math.floor(Math.random()* quiz.length)];
    currentQue = randomQue;
}

db.connect();

db.query("SELECT * FROM flags",(err,res) => {
    if(err){
        console.error("ERROR:", err.status);
    } else {
        quiz = res.rows;
    }
})

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",async (req,res) => {
    totalCorrect = 0;
    await nextQues();
    res.render("index.ejs", { question: currentQue});
});

app.post("/submit",(req,res) => {
    const ans = req.body["answer"];
    let isCorrect = false;
    if( currentQue.name.toLowerCase() === ans.toLowerCase()){
        isCorrect = true;
        totalCorrect++;
    }
    nextQues();
    res.render("index.ejs",{
        totalScore: totalCorrect,
        wasCorrect: isCorrect,
        question: currentQue
    });
});

app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});