import { Router } from 'express';

const OrdersController = require('../controllers/OrdersController');

const ordersRoutes = Router();

ordersRoutes.get('/cadastro', OrdersController.viewFormPedido);

ordersRoutes.post('/cadastro', OrdersController.criarPedido);
ordersRoutes.get('/teste', OrdersController.criarPedido);

export default ordersRoutes;
