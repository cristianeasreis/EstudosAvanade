const express = require('express')

const app = express();

app.use(express.json());

const pets = [];

/**
* Query params - Vamos utilizar para buscar informações específicas ou toda a informação
* Route params - Serve para identificar um recurso na nossa rota 
* Request body - ele serve buscar o corpo da requisição wue deve ser criada ou alterada 
*/

app.get('/pet',(request,response)=>{
    return response.json();
});
app.post('/pet',(request,response)=>{
    return response.json();
});
app.put('/pet/:id',(request,response)=>{
    return response.json();
});
app.delete('/pet/:id',(request,response)=>{
    return response.json();
});

// http://localhost:3030/pet
app.listen(3030);
