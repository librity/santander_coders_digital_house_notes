const express = require('express');
const path = require('path');

const rotas = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

app.use(rotas);
app.use((req, res) => {
  return res.send('Acho que você se perdeu!');
});

app.listen(3300, () => console.log('Servidor rodando na porta 3300'));
