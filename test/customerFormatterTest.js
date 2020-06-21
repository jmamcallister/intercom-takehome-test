const test = require('ava');
const CustomerFormatter = require('../app/formatter');

const testData = [
  { latitude: '51.8856167', user_id: 2, name: 'Ian McArdle', longitude: '-10.4240951' },
  { latitude: '51.92893', user_id: 1, name: 'Alice Cahill', longitude: '-10.27699' }
];

let cf;

// eslint-disable-next-line no-unused-vars
test.beforeEach((t) => {
  cf = new CustomerFormatter(testData);
});

test('should sort list', (t) => {
  cf.sortCustomersByIdAscending();
  t.true(cf.data[0].user_id <= cf.data[cf.data.length - 1].user_id);
});

test('should sort list with negative member', (t) => {
  cf.data.push({ latitude: '52.986375', user_id: -1, name: 'Christina McArdle', longitude: '-6.043701' });
  cf.sortCustomersByIdAscending();
  t.true(cf.data[0].user_id <= cf.data[cf.data.length - 1].user_id);
  t.is(cf.data[0].user_id, -1);
});
