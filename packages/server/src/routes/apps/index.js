const { Router } = require('express');

const rootRouter = require('./root');
const memeDashboard = require('./meme-dashboard');
const todoApp = require('./todo-app');

const router = Router();

router.use('/', rootRouter);
router.use('/meme-dashboard', memeDashboard);
router.use('/todo-app', todoApp);

module.exports = router;
