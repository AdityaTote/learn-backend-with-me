import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/movies' ,(req,res) => {
    const movies = [
        {
            id: 1,
            name: 'EndGame',
            releaseYear: 2019
        },
        {
            id: 2,
            name: 'Intersteller',
            releaseYear: 2014
        },
        {
            id: 3,
            name: 'Inception',
            releaseYear: 2010
        },
        {
            id: 4,
            name: 'Tenet',
            releaseYear: 2020
        },
        {
            id: 5,
            name: 'Infinity War',
            releaseYear: 2018
        },
        {
            id: 6,
            name: 'Martian',
            releaseYear: 2015
        },
        {
            id: 7,
            name: 'The Persuit of Happiness',
            releaseYear: 2006
        },
        {
            id: 8,
            name: 'The Batman',
            releaseYear: 2022
        },
        {
            id: 9,
            name: 'The  Vault',
            releaseYear: 2022
        },
        {
            id: 10,
            name: 'The Fight Clube',
            releaseYear: 2009
        },
    ];

    res.json(movies);
})

app.listen(port , () => {
    console.log(`App is listening on http://localhost:${port}`);
})