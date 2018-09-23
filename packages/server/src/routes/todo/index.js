import { Router } from 'express';
import getStaticPath from '../../utility/static-path';

const router = Router();
const publicPath = getStaticPath('todo-app');
router.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
export default router;