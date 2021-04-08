// const {response} = require('express')
const { request, response } = require('express');
const express = require('express');
const app = express();
//const port = 3000;
//const hostname = 'localhost';
app.get('/pets', (request, response) => {
  const pet = ['cachorro', 'gato'];
  return response.json(pet);
  // res.send('HELLO WORD')
});
app.post('/pets', (request, response) => {
  return response.json(['Cachorro', 'Gato']);
});
app.put("/pets/:id", (request, response) => {
  return response.json(['Dog', 'Gato']);
});
app.delete("/pets/:id", (request, response) => {
  return response.json(['Cachorro']);
});
// app.listen(port,() => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// });
app.listen(3000);
