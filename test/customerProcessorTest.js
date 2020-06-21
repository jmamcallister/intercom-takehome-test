const test = require('ava');
const CustomerProcessor = require('../app/processor');

const testData = [
  { latitude: '51.92893', user_id: 1, name: 'Alice Cahill', longitude: '-10.27699' },
  { latitude: '53.2451022', user_id: 4, name: 'Ian Kehoe', longitude: '-6.238335' }
];

let cp;

// eslint-disable-next-line no-unused-vars
test.beforeEach((t) => {
  cp = new CustomerProcessor(testData);
});

test('should exclude coordinates greater than max range', (t) => {
  const processedData = cp.getCustomersInRange(testData);
  t.is(processedData.length, 1);
  t.is(processedData[0].user_id, 4);
});
