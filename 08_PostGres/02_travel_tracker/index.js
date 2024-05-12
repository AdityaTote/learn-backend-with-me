import express from "express";
import pg from "pg";

const port = 3000;
const app = express();
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "12345",
    port: 5432
})

db.connect();

   

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/",async (req,res) => {
    let countries = [];
    const result = await db.query("SELECT country_code FROM visted_countries");
    result.rows.forEach((country) => {
        countries.push(country.country_code);
      });
      let count = countries.length

    res.render("index.ejs", { 
        countries: countries,
        total: count
    })
})

app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
})