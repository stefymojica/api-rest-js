const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const books = []; 

const jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    res.send('Esta es la API de libros')
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.post('/books', jsonParser, (req, res) => {
    books.push({
        author:req.body.author,
        name:req.body.name,
        id:req.body.id,
        total_pages:req.body.total_pages,
    })
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('Ejecutando')
})


