import { Router } from 'express';

import rootRouter from './root';
import memeDashboard from './memes';
import todoApp from './todo';
import memesSSR from './memes-ssr';

const router = Router();

router.use('/', rootRouter);
router.use('/memes', memeDashboard);
router.use('/todo', todoApp);
router.use('/memes-ss', memesSSR);

export default router;
