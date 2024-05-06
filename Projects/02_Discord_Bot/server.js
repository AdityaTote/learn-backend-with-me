import express from "express";
import dotenv from "dotenv"

// import all routes
import { urlRoute } from "./routes/urls.routers.js"
// import mongodb connection
import { connectMongoDB } from "./connection.js"

// config the .env file
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// connects the mongodb to express server by the db name "discord-bot-urls"
connectMongoDB(`${process.env.MONGODB_URL}/discord-bot-urls`)
.then(() => console.log("MONGODB CONNECTED"))
.catch((err) => console.log("ERR:",err.message));

// Some middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use("/", urlRoute);

// Server listening
app.listen(port ,() => {
    console.log(`Server is listening on: http://localhost:${port}`);
});