import { Router } from 'express';

import MenuController from '../controllers/MenuController';

const menuRoutes = Router();

menuRoutes.get('/', MenuController.index);

export default menuRoutes;
