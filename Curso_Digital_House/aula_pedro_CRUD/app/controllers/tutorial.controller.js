const db = require("../models");

Tutorial = db.tutorials;
const Op = db.sequelize.Op; //redução de código

exports.create = (req, res) => {
  //Validate Request
  if (!req.body.title) {
    res.status(400).send({
      message: "Título não pode ser vazio!",
    });
    return;
  }
  //Create Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro interno ao criar o tutorial",
      });
    });
};
exports.findAll = (req, res) => {
  Tutorial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Erro interno ao buscar os tutoriais"
      });
    });
};
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true }})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Erro interno ao buscar os tutoriais"
      });
    });
  };
  exports.findOne = (req, res) => {
    Tutorial.findByPk(req.params.id)
      .then((data) => {
        res.send(data);
      })
      .catch((data) => {
        res.status(500).send({
          message: err.message || `Erro ao buscar o id ${req.params.id}`,
        });
      });
  };
  
  
  



