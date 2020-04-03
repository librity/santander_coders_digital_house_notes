import { Router } from 'express';
import multer from 'multer';

import { pizzaThumbnails } from '../config/multer';
import PizzasController from '../controllers/PizzasController';

const upload = multer(pizzaThumbnails);

const pizzasRoutes = Router();

pizzasRoutes.get('/', PizzasController.index);

pizzasRoutes.get('/new', PizzasController.neW);

pizzasRoutes.post('/cadastro', upload.any(), PizzasController.create);

pizzasRoutes.post('/delete', PizzasController.deletePizza);

export default pizzasRoutes;
