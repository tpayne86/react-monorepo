import { Router } from 'express';

import rootRouter from './root';
import memeDashboard from './memes';

const router = Router();

router.use('/', rootRouter);
router.use('/memes', memeDashboard);

export default router;
