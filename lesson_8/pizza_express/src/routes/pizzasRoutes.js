import { Router } from 'express';
import multer from 'multer';

import multerPizzaThumbnails from '../config/multerPizzaThumbnails';
import PizzasController from '../controllers/PizzasController';
import authentication from '../middlewares/authentication';

const upload = multer(multerPizzaThumbnails);

const pizzasRoutes = Router();

pizzasRoutes.use(authentication);

pizzasRoutes.get('/', PizzasController.index);
pizzasRoutes.get('/new', PizzasController.neW);
pizzasRoutes.post('/', upload.any(), PizzasController.create);
pizzasRoutes.delete('/:id', PizzasController.deletePizza);

export default pizzasRoutes;
