const formatRouterModuleName = require('../../src/utils/formatRouterModuleName');

describe('utils::formatRouterModuleName', () => {
  it('Returns the correct format for a standard module name', () => {
    const testName = 'test';
    const formattedTestName = formatRouterModuleName(testName);
    expect(formattedTestName).toBe('testRouter');
  });
});
