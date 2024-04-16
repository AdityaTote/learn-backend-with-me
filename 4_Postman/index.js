import express from 'express';

const port = 3000
const app = express()

app.get('/',(req,res) => {
    res.send('<h1>Hello</h1>');
})
app.post('/resgister',(req,res) => {
    res.sendStatus(201);
})
app.put('/users/john',(req,res) => {
    res.sendStatus(200);
})
app.patch('/users/john',(req,res) => {
    res.sendStatus(200);
})
app.delete('/users/john',(req,res) => {
    res.sendStatus(200);
})

app.listen(port , () => {
    console.log(`Server is listeining on http://localhost:${port}`);
})