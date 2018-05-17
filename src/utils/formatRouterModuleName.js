/**
 * Formats the name of a router module according to the same standard
 * so that they can be registered correctly into our dependency container.
 * @param {string} name Name of the resolved module.
 * @returns Formatted name of the resolved module.
 */
function formatRouterModuleName(name) {
  return `${name}Router`;
}

module.exports = formatRouterModuleName;
