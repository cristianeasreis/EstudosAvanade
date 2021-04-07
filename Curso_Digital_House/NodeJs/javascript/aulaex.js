const express = require ('express');
const app = express();
const port = 3000;
const hostname = 'localhost';

app.get('/', (req, res) =>{
 const pet = ['cachorro', 'papagaio',  'gato', 'passarinho']
    res.json(pet)
    // res.send('HELLO WORD')
});

app.listen(port,() => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
