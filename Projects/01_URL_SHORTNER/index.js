import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

// MONGO CONNECTION Import
import {connectMongoDB} from "./connection.js";

// Routes Imports
import { urlRouter } from "./routes/urls.routes.js";
import {staticRouter} from "./routes/static.routes.js";
import { userRoute } from "./routes/user.routes.js";

import { checkAuth,restriTo} from "./middlewares/auth.middlewares.js"

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
app.use(cookieParser());
app.use(checkAuth);

// Setting ejs files in views folder
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Routes
app.use("/url", restriTo(["NORMAL","ADMIN"]), urlRouter);
app.use("/", staticRouter);
app.use("/user",userRoute);


//listeners 
app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});