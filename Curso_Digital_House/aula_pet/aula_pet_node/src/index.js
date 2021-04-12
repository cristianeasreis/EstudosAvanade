const express = require('express')
const { v4: uuidv4} = require("uuid");

const app = express();

app.use(express.json());

const pets = [];

/**
* Query params - Vamos utilizar para buscar informações específicas ou toda a informação
* Route params - Serve para identificar um recurso na nossa rota 
* Request body - ele serve buscar o corpo da requisição wue deve ser criada ou alterada 
*/

app.get('/pet',(request,response)=>{
    return response.json(pets);
});
app.post('/pet',(request,response)=>{
    const {nome, tipoPet, idade, raca, nomeDono} = request.body;
    const pet = {id:uuidv4(),nome, tipoPet, idade, raca, nomeDono};
    pets.push(pet);
    return response.json(pet);// sempre retornar o pet criado e não o valor
});
app.put('/pet/:id',(request,response)=>{
    return response.json();
});
app.delete('/pet/:id',(request,response)=>{
    return response.json();
});

// http://localhost:3030/pet
app.listen(3030);
