module.exports = app =>{
    const tutorials = require("../controllers/tutorial.controller");
    
    var router = require("express").Router();

    // cria novo tutorial
    router.post("/",tutorials.create);


    app.use('/api/tutorials', router);
}