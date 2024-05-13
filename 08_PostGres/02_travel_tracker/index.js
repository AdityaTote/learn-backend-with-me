import express from "express";

import { displayRouter } from "./routes/maps.routes.js"
import { db } from "./db/confing.db.js"

const port = 3000;
const app = express();

// database connection
db.connect()

// middlewares
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

//routes
app.use("/",displayRouter)

// listener
app.listen(port, () => {
    console.log(`SERVER IS LISTEINING ON: http://localhost:${port}`);
})