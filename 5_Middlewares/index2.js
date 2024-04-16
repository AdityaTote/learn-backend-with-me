// USING MORGAN AS MIDDLEWARES
import express from "express";
import morgan from "morgan"

const port =3000;

const app = express();

app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.send(' <h1>WLC</h1> ')
});

app.listen(port , () => {
    console.log(`Server is listenibng on : http://localhost:${port}`);
});