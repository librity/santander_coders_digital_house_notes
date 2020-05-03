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
const Usuario = require('model/usuario.js');

Usuario.create({ nome: 'geniole', email: '123@example.com', senha: '123456' });

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Filme = require('model/filme.js');

Filme.bulkCreate([
  { titulo: 'Adasa', genero: 'ewqeeq' },
  { titulo: 'dsawrqw', genero: 'e3rfsa' },
]);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Produto = require('model/produto.js');

const produtoController = {
  create: (req, res) => {
    const { nome, preco } = req.body;

    Produto.create({ nome, preco });
  },
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Produto = require('model/Produto.js');

Produto.update({ preco: 899 }, { where: { id: 1 } });

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Serie = require('model/Serie.js');

Serie.update({ genero: 'sitcom' }, { where: { genero: 'comédia' } });

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Filme = require('model/filme.js');

Filme.destroy({ where: { id: 3 } });

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Usuario = require('model/usuario.js');

Usuario.destroy({ where: { email: 'kenny@south-park.com' } });

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({ where: { email: { [Op.like]: '%aol.com' } } });

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
module.exports = (sequelize, DataTypes) => {
  const Filme = sequelize.define('filmes', {
    titulo: DataTypes.STRING,
    genero_id: DataTypes.INTEGER,
  });

  Filme.associate = (models) => {
    Filme.belongsTo(models.Genero, { foreignKey: 'genero_id', as: 'genero' });
  };

  return Filme;
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define('generos', {
    nome: DataTypes.STRING,
  });

  Genero.associate = (models) => {
    Genero.hasMany(models.Filme, { foreignKey: 'genero_id', as: 'filmes' });
  };

  return Genero;
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Filme = require('model/Filme.js');

Filme.findByPk(1, { include: ['genero'] }).then((filme) =>
  console.log(filme.genero.nome)
);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');
const sequelize = require('../database');

const FilmeAtor = sequelize.define('filme_ator', {
  filme_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Filme',
      key: 'id',
    },
  },
  ator_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Ator',
      key: 'id',
    },
  },
});

module.exports = FilmeAtor;

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Sequelize = require('sequelize');
const sequelize = require('../database');
const Ator = require('model/ator.js');
const Filme = require('model/filme.js');

const FilmeAtor = sequelize.define('filme_ator', {
  pelicula_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Filme',
      key: 'id',
    },
  },
  ator_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Ator',
      key: 'id',
    },
  },
});

FilmeAtor.belongsTo(Filme, { foreignKey: 'filme_id' });
FilmeAtor.belongsTo(Ator, { foreignKey: 'ator_id' });

module.exports = FilmeAtor;

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
module.exports = (sequelize, DataTypes) => {
  const Filme = sequelize.define('filmes', {
    titulo: DataTypes.STRING,
    genero_id: DataTypes.INTEGER,
  });

  Filme.associate = (models) => {
    Filme.belongsToMany(models.Ator, {
      through: 'FilmeAtor',
      foreignKey: 'filme_id',
      as: 'atores',
    });
  };

  return Filme;
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Filme = require('model/filme.js');

Filme.findByPk(1, { include: ['atores'] }).then((filme) =>
  console.log(filme.atores)
);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Filme = require('model/filme.js');

Filme.findByPk(1).then((filme) => {
  filme.setAtores([3, 5, 8]);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
