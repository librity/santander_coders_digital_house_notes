import { Router } from 'express';

import SessionsController from '../controllers/SessionsController'

const sessionsRoutes = Router();

sessionsRoutes.get('/new', SessionsController.neW)
sessionsRoutes.post('/', SessionsController.create)

export default sessionsRoutes;
