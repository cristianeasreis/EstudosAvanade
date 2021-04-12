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

    return response.json();
});
// http://localhost:3030
app.listen(3030);
