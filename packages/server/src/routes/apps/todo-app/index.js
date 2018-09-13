const { Router } = require('express');
const getStaticPath = require('../../../utility/static-path');

const router = Router();
const publicPath = getStaticPath('todo-app');
router.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
module.exports = router;
