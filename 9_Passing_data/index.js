    import express from "express";
    import bodyParser from "body-parser";

    const port = 3000;
    const app = express();
    let lenOfName

    const str = (req ,res ,next) => {
        let yourName = (req.body['fname'] ? req.body['fname'] : '') + (req.body['lname'] ? req.body['lname'] : '');
        lenOfName = yourName.length;
        next();
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(str);

    app.get("/", (req,res) => {
        // const info = {
        //     title: "<h2>Enter Your Name Below</h2>"
        // }
        res.render("index.ejs");
    })

    app.post("/submit",(req,res) => {
        // const info = {
        //     title: `<h2>There are ${lenOfName} in your name.</h2>`
        // }

        res.render("index.ejs", { lenOfName: lenOfName })
    });

    app.listen(port,() => {
        console.log(`Server is listing on: http://localhost:${port}`);
    })
