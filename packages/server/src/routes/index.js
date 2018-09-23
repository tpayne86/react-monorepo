import { Router } from 'express';

import rootRouter from './root';
import memeDashboard from './memes';
import todoApp from './todo';

const router = Router();

router.use('/', rootRouter);
router.use('/memes', memeDashboard);
router.use('/todo', todoApp);

export default router;
