import { Router } from 'express';

import StaticPagesController from '../controllers/StaticPagesController';

const staticPagesRoutes = Router();

staticPagesRoutes.get('/', StaticPagesController.home);

export default staticPagesRoutes;
