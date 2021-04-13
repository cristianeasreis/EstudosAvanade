const express = require ('express');
const db = require("./app/models");

const app = express();

app.unsubscribe(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req, res) =>{
    res.json({message: "Avanade Crud"});
});

db.sequelize.sync();


const PORT = process.eventNames.PORT || 8080;
app.listen(PORT,() =>{
    console.log(`Servidor Rodando na porta: ${PORT}`);
});
