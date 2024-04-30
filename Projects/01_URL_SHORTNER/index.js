import express from "express";
import path from "path";
import {urlRouter} from "./routes/index.routers.js";
import {staticRouter} from "./routes/static.route.js";
import {connectMongoDB} from "./connection.js";

const port = 3001;
const app = express();
const MongoURL = "mongodb://127.0.0.1:27017"

//MongoDB Connection
connectMongoDB(`${MongoURL}/short-url`)
.then(() => console.log("MONGODB CONNECTED"))
.catch((err) => console.log("ERR:",err.message));

//middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.json());  

// Setting ejs files in views folder
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Routes
app.use("/",staticRouter);
app.use("/url",urlRouter);


//listeners 
app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});