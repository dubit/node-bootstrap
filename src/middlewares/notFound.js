const Boom = require('boom');

function notFoundMiddleware(req, res) {
  const { output } = Boom.notFound('API Route not found.');
  return res.status(output.statusCode).json(output.payload);
}

module.exports = notFoundMiddleware;
