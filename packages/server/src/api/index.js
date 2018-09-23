import { Router } from 'express';

import memeRouter from './meme';

const router = Router();

router.use('/', memeRouter);

export default router;
