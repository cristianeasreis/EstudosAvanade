const express = require('express')

const app = express();

//QUERY

app.get('/pet',(request,response)=>{
    return response.json('Oi');
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
