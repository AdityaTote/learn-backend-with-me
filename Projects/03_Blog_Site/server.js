import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;
const mongodb_Url= process.env.MONGODB_URL;

// MONGODB connection
import { connect } from "./connection.js";

connect(`${mongodb_Url}/blogs-db`)

// setting views path
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

// Middlewares
import { checkAuthCookie } from "./middlewares/auth.middlewares.js"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(checkAuthCookie());

// Routes
import { homeRoute } from "./routes/home.routes.js";
import { userRoute } from "./routes/user.routes.js";
import { blogRoute } from "./routes/blog.routes.js";
import { commentRoute } from "./routes/comment.routes.js";

app.use('/', homeRoute);
app.use('/users',userRoute);
app.use('/blogs',blogRoute);
app.use('/comments',commentRoute);

// Listener
app.listen(port,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});