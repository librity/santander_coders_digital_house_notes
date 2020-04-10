import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRoutes = Router();

usersRoutes.get('/new', UsersController.neW);
usersRoutes.post('/', UsersController.create);

export default usersRoutes;
