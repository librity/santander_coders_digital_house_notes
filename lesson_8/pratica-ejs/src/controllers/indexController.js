const Projeto = require("../models/Projeto");

const indexController = {
  inicio: (req, res) => {
    let listaDeProjetos = Projeto.pegarProjetos();
    return res.render("index", { listaDeProjetos });
  }
};

module.exports = indexController;
