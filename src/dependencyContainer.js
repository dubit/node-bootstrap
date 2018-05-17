const path = require('path');
const awilix = require('awilix');
const formatRouterModuleName = require('./utils/formatRouterModuleName');

let instance = null;

function getInstance() {
  if (instance !== null) {
    return instance;
  }

  instance = awilix.createContainer();
  instance.loadModules(
    [
      'controllers/**/*.js',
      'services/**/*.js',
    ],
    {
      formatName: 'camelCase',
      cwd: path.join(process.cwd(), 'src'),
      resolverOptions: {
        lifetime: awilix.Lifetime.SINGLETON,
        register: awilix.asClass,
      },
    },
  );

  instance.loadModules(
    [
      'routes/**/*.js',
    ],
    {
      formatName: formatRouterModuleName,
      cwd: path.join(process.cwd(), 'src'),
      resolverOptions: {
        lifetime: awilix.Lifetime.SINGLETON,
        register: awilix.asFunction,
      },
    },
  );

  return instance;
}

module.exports = { getInstance };
