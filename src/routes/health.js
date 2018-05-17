const { Router } = require('express');

function createHealthRouter({ healthController }) {
  const healthRouter = new Router();

  healthRouter.get('/', healthController.reportHealthStats.bind(healthController));

  return healthRouter;
}

module.exports = createHealthRouter;
