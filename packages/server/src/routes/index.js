const { Router } = require('express');
const appRouter = require('./apps');

const router = Router();

router.use('', appRouter);

module.exports = {
  staticRouter: router,
};
