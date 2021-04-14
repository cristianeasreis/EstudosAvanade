module.exports = app => {
    const tutorials = require ("../controllers/tutorial.controller");

    var router = require ("express").Router();

    //Cria Novo tutorial
    router.post("/", tutorials.create);
    //Retorna todos os tutoriais
    router.get("/", tutorials.findAll);
    //Retorna os tutoriais publicados
    router.get("/published", tutorials.findAllPublished);
    //Retorna um tutorial com id específico
    router.get("/:id", tutorials.findOne);
    //Atualiza tutorial
    router.put("/:id", tutorials.update);
    // delete tutorial
    router.delete("/:id", tutorials.delete);
    // delete todos os tutoriais
    router.delete("/", tutorials.deleteAll);



    app.use('/api/tutorials', router)
}
