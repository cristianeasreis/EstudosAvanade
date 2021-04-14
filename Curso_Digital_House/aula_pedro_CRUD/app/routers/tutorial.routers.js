module.exports = app =>{
    const tutorials = require("../controllers/tutorial.controller");
    
    var router = require("express").Router();

    // cria novo tutorial
    router.post("/",tutorials.create);
    // retorna todos os tutorials
    router.get("/", tutorials.findAll);
    // retorna os tutoriais publicados
    router.get("/published",tutorials.findAllPublished);
   // Retorna um tutorial com id específico
   router.get("/:id",tutorials.findOne);



    // rota
    app.use('/api/tutorials', router);
}