import { Router } from 'express';

import request from 'request';

const router = Router();

router.get('/memes', (req, res) => {
  request('https://api.imgflip.com/get_memes').pipe(res);
});

export default router;
