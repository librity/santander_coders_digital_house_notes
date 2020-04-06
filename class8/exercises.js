let userController = {
  loginUser: function (req, res) {
    res.render('login');
  },
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

let produtos = ['Sorvete 250g', 'Bolacha de Chocolate', 'Maçã 500g'];
let carrinhoController = {
  checkout: function (req, res) {
    res.render('checkout', { items: produtos });
  },
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');

const router = express.Router();

router.get('/filmes', (req, res) => {
  return res.send('Lista de filmes');
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');

const router = express.Router();

router.get('/produtos', (req, res) => {
  const { query } = req;

  res.send(query);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const router = express.Router();

const celulares = [
  {
    nome: 'Motorola Moto E6 Plus',
    preco: 14999,
  },
  {
    nome: 'Motorola Moto G7',
    preco: 19999,
  },
  {
    nome: 'Alcatel 5033A',
    preco: 6999,
  },
  {
    nome: 'Samsung Galaxy A50',
    preco: 33499,
  },
];

router.get('/celulares', (req, res) => {
  const { max } = req.query;

  const filtered_phones = celulares.filter((phone) => phone.preco <= max);

  return res.send(filtered_phones);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const router = express.Router();

router.post('/ver-body', (req, res) => {
  const { body } = req;

  return res.send(body);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const router = express.Router();

let produto = {
  nome: null,
  preco: null,
};

router.post('/criar/produto', (req, res) => {
  // const { nome, preco } = req.body;

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;

  return res.send(produto);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');

const router = express.Router();

const filmes = [
  {
    id: 1,
    titulo: 'Spider-Man: Longe de casa',
    duracao: 129,
    genero: 'Aventura',
  },
  {
    id: 2,
    titulo: 'Toy Story 4',
    duracao: 100,
    genero: 'Animacao',
  },
  {
    id: 3,
    titulo: 'X-Men: Fênix Negra',
    duracao: 113,
    genero: 'Acao',
  },
];

router.put('/filme/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, duracao, genero } = req.body;

  filmes.forEach((movie) => {
    if (movie.id == id) {
      movie.titulo = titulo;
      movie.duracao = duracao;
      movie.genero = genero;
    }
  });

  return res.status(204);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');

const router = express.Router();

let celulares = [
  {
    id: 1,
    nome: 'Motorola Moto E6 Plus',
    preco: 14999,
  },
  {
    id: 2,
    nome: 'Motorola Moto G7',
    preco: 19999,
  },
  {
    id: 3,
    nome: 'Alcatel 5033A',
    preco: 6999,
  },
  {
    id: 4,
    nome: 'Samsung Galaxy A50',
    preco: 33499,
  },
];

router.delete('/celular/:id', (req, res) => {
  const id = req.params.id;

  celulares = celulares.filter((phone) => phone.id != id);

  return res.status(204);
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((req, res, next) => {
  return res.status(404).render('not-found');
});

app.use(router);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const path = require('path');

console.log(path);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const path = require('path');

const rota = path.join('tecnologia', 'video-games', 'mario-kart');

console.log(rota);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const path = require('path');

const movies = 'movies.json';
const extension = path.extname(movies);

console.log(extension);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const path = require('path');

const logo = '/assets/images/logo.png';
const diretorio = path.dirname(logo);

console.log(diretorio);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const path = require('path');
const fs = require('fs');

const logo = '/assets/images/logo.png';

console.log(fs);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const fs = require('fs');

const content = 'Hello World';
const fileName = 'bemvindo.txt';

fs.writeFileSync(fileName, content);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const fs = require('fs');

const filmes = [
  {
    id: 1,
    titulo: 'Spider-Man: Longe de casa',
    duracao: 129,
    genero: 'Aventura',
  },
  {
    id: 2,
    titulo: 'Toy Story 4',
    duracao: 100,
    genero: 'Animação',
  },
  {
    id: 3,
    titulo: 'X-Men: Fênix Negra',
    duracao: 113,
    genero: 'Ação',
  },
];

const fileName = 'filmes.json';

fs.writeFileSync(fileName, JSON.stringify(filmes));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();

var produto = {
  nome: null,
  preco: null,
};

const fileName = 'produto.json';

router.post('/criar-produto', (req, res) => {
  const { nome, preco } = req.body;

  produto.nome = nome;
  produto.preco = preco;

  fs.writeFileSync(fileName, JSON.stringify(produto));

  return res.send(204);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.listen(3000);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const fs = require('fs');

const content = 'aprender Node';
const fileName = 'pendente.txt';

fs.appendFileSync(fileName, content);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const fs = require('fs');

const fileName = 'tarefas.txt';

const tarefas = fs.readFileSync(fileName, { encoding: 'utf-8' });

console.log(tarefas);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const fs = require('fs');

const fileName = 'produtos.json';

const produtos = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf-8' }));

console.log(produtos);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const fs = require('fs');

let filme = JSON.parse(fs.readFileSync('filme.json', { encoding: 'utf-8' }));

console.log(filme.titulo);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const bcrypt = require('bcrypt');

const password = '123456';

const hash = bcrypt.hashSync(password, 10);

console.log(hash);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const bcrypt = require('bcrypt');

const hash1 = bcrypt.hashSync('123456', 10);
const hash2 = bcrypt.hashSync('123456', 10);

if (hash1 === hash2) console.log('os hashes são iguais');

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const bcrypt = require('bcrypt');

const hash = bcrypt.hashSync('123456', 10);

if (bcrypt.compareSync('123456', hash)) console.log('a senha está correta');

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/register', upload.any(), usersController.save);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const app = express();

app.use(express.json());

const router = express.Router();

router.post('/criar-produto', (req, res) => {
  console.log(req.body);

  res.send('O produto foi criado com sucesso');
});

app.use(router);

app.listen(3000);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const app = express();
let emManutencao = false;

app.use((req, res, next) => {
  if (emManutencao) {
    return res.render('em-manutencao');
  }

  return next();
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = _require('express');
const app = express();
const usuario = {
  nome: 'Antônio',
  sobrenome: 'Zizek',
};

app.use((req, res, next) => {
  req.usuario = usuario;

  return next();
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

router.post('/upload-file', upload.any(), fileController.upload);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estatisticasController = require('../controllers/estatisticasController');

function visitasMiddleware(req, res, next) {
  estatisticasController.contarAcesso(req);

  return next();
}

router.get('/home', visitasMiddleware, homeController.index);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

function redirecionar(req, res, next) {
  return res.redirect('/');
}

router.get('/rota-em-desuso', redirecionar, OldController.index);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');

const UsuarioController = require('../controllers/UsuarioController');

router.post(
  '/cadastro',
  [check('email').isEmail(), check('password').isLength({ min: 6 })],
  UsuarioController.registro
);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const { check, validationResult, body } = require('express-validator');

const favoritosController = require('../controllers/favoritosController');

const router = express.Router();

router.post(
  '/favoritos',
  [
    body('url').custom((value) => {
      return value.indexOf('https') !== -1;
    }),
  ],
  favoritosController.salvar
);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const { check, validationResult, body } = require('express-validator');

const router = express.Router();

const userController = {
  login: (req, res) => {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      return res.render(erros.array());
    }

    if (req.body.name == 'admin' && req.body.pass == 123) {
      res.redirect('/dashboard');
    }
  },
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({ secret: 'frase secreta' }));

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({ secret: 'frase secreta', idioma: '' }));

const alterarIdioma = (req, res) => {
  req.session.idioma = req.query.idioma;

  res.redirect('/');
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({ secret: 'frase secreta' }));

const admin = (req, res) => {
  if (req.session.admin) {
  } else {
    return res.redirect('/');
  }
};
//^^^ABSOLUTELY DREADFUL
const admin = (req, res, next) => {
  if (!req.session.admin) return res.redirect('/');

  return next();
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
  res.cookie('ultimoAcesso', new Date());
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
  let estilo;

  if (!req.cookies.estilo) {
    estilo = 'default';
  } else {
    estilo = req.cookies.estilo;
  }

  res.render('/', { estilo: estilo });
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listaDeProdutos = {
  vestidos: ['vestido broderie', 'vestido towel', 'vestido voile'],
  camisetas: ['camisa de retalhos', 'camisa bordada'],
};

const recomendados = (req, res) => {
  const preferencias = req.cookies.preferencias;

  const produtos = listaDeProdutos[preferencias];

  return res.render('/', { produtos });
};

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
