const test = require('ava');
const requiredParameters = require('../app/config/constants').requiredParameters;

// eslint-disable-next-line no-unused-vars
test.beforeEach((t) => {
  requiredParameters.forEach((param) => (process.env[param] = 'someValue'));
});

test('should load required values', (t) => {
  const config = require('../app/config');
  t.notThrows(config.ensureParameters);
  t.is(config.dataFilePath, 'someValue');
});

test('should throw error if any mandatory parameters are missing', (t) => {
  process.env[requiredParameters[0]] = '';
  const config = require('../app/config');
  t.throws(config.ensureParameters, {
    instanceOf: Error,
    message: 'Could not find environment parameter ' + requiredParameters[0]
  });
});
