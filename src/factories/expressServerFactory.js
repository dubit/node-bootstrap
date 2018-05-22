const express = require('express');
const responseTime = require('response-time');

const responseTimeLogger = logger => (req, res, time) => {
  logger.debug(`Completed ${req.method} ${req.originalUrl} in ${time.toFixed(4)}ms`);
};

function expressServerFactory(cradle) {
  const { logger, indexRouter } = cradle;
  return new Promise((resolve) => {
    logger.debug('Running expressServerFactory...');

    const server = express();

    server.disable('x-powered-by');

    server.use(responseTime(responseTimeLogger(logger)));

    const port = process.env.SERVER_PORT || 3000;

    server.listen(port, () => {
      logger.info(`Express server has started on port ${port}`);
      server.use('/api/v1/', indexRouter);
      resolve();
    });
  });
}

module.exports = expressServerFactory;
