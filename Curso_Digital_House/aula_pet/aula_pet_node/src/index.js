const express = require('express');
const app = express();
const {v4 : uuidv4} = require("uuid");
//numeros,letras e pontuações - segurança

/**
* Query params - Vamos utilizar para buscar informações específicas ou toda a informação
* Route params - Serve para identificar um recurso na nossa rota 
* Request body - ele serve buscar o corpo da requisição que deve ser criada ou alterada 
*/

// não retorna em mais de uma rota / arquivo json - função retorna json nas demais rotas- undefined
app.use(express.json());

const pets = [];

app.get('/pet',(request,response)=>{
    return response.json(pets);
});

app.post('/pet',(request,response)=>{
    const {nome,tipoPet,idade,raca,nomeDono} = request.body;
    // const body = request.body; trazer corpo da req
    const pet = {id: uuidv4(),nome, tipoPet,idade, raca,nomeDono};

    pets.push(pet);

    return response.json(pet); // sempre retornar o pet criado e não o vetor completo
});

app.put('/pet/:id',(request,response)=>{
    const {id} = request.params; // aqui nos pegamos nosso ID
    const {nome, tipoPet,idade, raca,nomeDono} = request.body; // pega todo escopo das informações

    const petIndex = pets.findIndex(pet => pet.id === id);

    if(petIndex < 0){
        return response.status(400).json({error : "Pet não encontrado!"})
    }

    const pet = {
        id,
        nome, 
        tipoPet,
        idade, 
        raca,
        nomeDono

    }
    pets[petIndex] = pet

    return response.json(pet);
});
app.delete('/pet/:id',(request,response)=>{
    const { id } = request.params;

    const petIndex = pets.findIndex(pet => pet.id === id);

    if(petIndex < 0){
        return response.status(400).json({error : "Pet não encontrado!"})
    }

    pets.splice(petIndex, 1);

    return response.status(204).send();
});

// http://localhost:3030
app.listen(3030);

