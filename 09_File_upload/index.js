import path from "path";
import express from "express";
import dotenv from "dotenv";

import { connect } from "./db.js"
import { route } from "./routes/file.routes.js"

dotenv.config();

const port = process.env.PORT;
const app = express();

//connection
const url = process.env.MONGODB_URL; 
connect(`${url}/file-upload`);

//Views Set
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

//Middlesware
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/', route);

app.listen(port,() => {
    console.log(`Server is listeing on port: http://localhost:${port}`);
})