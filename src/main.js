const { asValue } = require('awilix');
const DependencyContainer = require('./dependencyContainer');
const loggerFactory = require('./factories/loggerFactory');
const expressServerFactory = require('./factories/expressServerFactory');

async function main() {
  console.time('BOOT');
  const logger = loggerFactory();
  logger.info('Starting up the application...');

  const dependencyContainer = DependencyContainer.getInstance();
  logger.debug('Dependency container succesfully instantiated.');

  dependencyContainer.register('logger', asValue(logger));

  await expressServerFactory(dependencyContainer.cradle);

  console.timeEnd('BOOT');
}

main();
