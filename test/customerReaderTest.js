const test = require('ava');
const CustomerReader = require('../app/reader');

test('should read file with good data', async (t) => {
  const cr = new CustomerReader(__dirname + '/goodCustomerData.txt');
  const data = await cr.readData();
  t.truthy(data);
  t.is(data.length, 2);
});

test('should not read file with bad data', async (t) => {
  const cr = new CustomerReader(__dirname + '/badCustomerData.txt');
  await t.throwsAsync(cr.readData(), { instanceOf: SyntaxError });
});
