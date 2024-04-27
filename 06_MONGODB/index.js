import express from "express";
import {userRouter} from "./routes/user.routers.js";
import { connectMongoDb } from "./connection.js";
  
 
const port = 3000;
const app = express();
const URI ="mongodb://127.0.0.1:27017";   // space in url also lead to coonection error

//Coonection of MongoDB
connectMongoDb(`${URI}/test-01`)
 .then(() => console.log("MONGODB CONNECTED"))
 .catch((err) => console.log(`ERR:${err.message}`))

app.use(express.urlencoded({extended: true}));

//Routes
app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`Server is litening on http://localhost:${port}`);
})