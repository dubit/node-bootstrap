const { Router } = require('express');
const notFoundMiddleware = require('../middlewares/notFound');

function createIndexRouter({ healthRouter }) {
  const indexRouter = new Router();
  indexRouter.use('/health', healthRouter);
  indexRouter.use('*', notFoundMiddleware);
  return indexRouter;
}

module.exports = createIndexRouter;
