import express from "express";
import {urlRouter} from "./routes/index.routers.js";
import {connectMongoDB} from "./connection.js";

const port = 3000;
const app = express();
const MongoURL = "mongodb://127.0.0.1:27017"

//MongoDB Connection
connectMongoDB(`${MongoURL}/short-url`)
.then(() => console.log("MONGODB CONNECTED"))
.catch((err) => console.log("ERR:",err.message));

//middlewares
app.use(express.urlencoded({ extended:true }));

//Routes
app.use("/url",urlRouter);

//listeners 
app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});