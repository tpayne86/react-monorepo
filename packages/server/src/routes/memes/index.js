import { Router } from 'express';

import getStaticPath from '../../utility/static-path';

const router = Router();
const publicPath = getStaticPath('/');

router.get('/', (req, res) => {
  res.sendFile(`${publicPath}/memes/index.html`);
});
export default router;
