const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const sequelize = new Sequelize('config');

sequelize
  .query('SELECT * FROM users')
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const sequelize = new Sequelize('config');

const mostrar = (req, res) => {
  const { id } = req.params;

  sequelize
    .query('SELECT * FROM produtos WHERE id = ' + id)
    .then((result) => {
      return res.send(result);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send('Erro 500 - Algo deu errado');
    });
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const sequelize = new Sequelize('config');

const borrar = (req, res) => {
  const { id } = req.params;

  sequelize
    .query('DELETE FROM filmes WHERE id = ' + id)
    .then((result) => {
      return res.send('Produto excluído com sucesso');
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send('Erro ao excluir o produto');
    });
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios', {
  nome: Sequelize.STRING,
  email: Sequelize.STRING,
  senha: Sequelize.STRING,
});

module.exports = Usuario;

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define(
  'usuarios',
  {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
  },
  { timestamps: false }
);

module.exports = Usuario;
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Filmes = require('model/filmes.js');

Filmes.findAll().then((results) => console.log(results));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Filmes = require('model/filmes.js');

Filmes.findByPk(1).then((results) => console.log(results));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Auto = require('model/autos.js');

Auto.findAll({ where: { marca: 'Fiat' } }).then((autos) => {
  console.log(autos);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');
const Usuario = require('model/usuarios.js');
const Op = Sequelize.Op;

Usuario.findAll({
  where: {
    email: { [Op.like]: '%gmail.com' },
  },
}).then((usuarios) => {
  console.log(usuarios);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Producto = require('model/produtos.js');

Producto.findAll({
  order: [['preco', 'ASC']],
}).then((produtos) => {
  console.log(produtos);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Produto = require('model/produtos.js');

Produto.findAll({
  limit: 5,
}).then((produtos) => {
  console.log(produtos);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Produto = require('model/produtos.js');

Produto.max('preco').then((result) => console.log(result));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Usuario = require('model/usuarios.js');

Usuario.count().then((result) => console.log(result));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
