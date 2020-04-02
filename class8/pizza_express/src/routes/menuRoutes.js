import { Router } from 'express';

import MenuController from '../controllers/MenuController';

const menuRoutes = Router();

menuRoutes.get('/cadastrar/:pizza/:preco', (req, res) => {
  res.send('Cadastrou pizza com sucesso!');
});

menuRoutes.get('/ver', MenuController.listarCardapio);
menuRoutes.get('/cadastro', MenuController.viewFormCadastro);

menuRoutes.post('/cadastro', MenuController.criarPizza);

menuRoutes.post('/delete', MenuController.deletePizza);

module.exports = menuRoutes;
