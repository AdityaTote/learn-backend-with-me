import express from "express";

const port = 3000;
const app = express();

app.get('/',(req,res) => {
    const today = new Date();
    const day = today.getDay();
    // console.log(today);
    // console.log(day);
    let type = "Weekday"
    let adv = "Work";
    if(day === 0 || 6){
        type = "Weekend";
        adv = "Have Fun"
    }

    res.render("index.ejs",{
        day: type,
        advice: adv ,
    })
});

app.listen(port, () => {
    console.log(`Server is listiening on http:localhost:${port}`);
});