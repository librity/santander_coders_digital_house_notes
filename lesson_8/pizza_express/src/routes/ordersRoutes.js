import { Router } from 'express';

import OrdersController from '../controllers/OrdersController';

const ordersRoutes = Router();

ordersRoutes.get('/new', OrdersController.neW);
ordersRoutes.post('/', OrdersController.create);

export default ordersRoutes;
