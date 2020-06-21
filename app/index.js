const config = require('./config');
const CustomerReader = require('./reader');
const CustomerProcessor = require('./processor');
const CustomerFormatter = require('./formatter');

async function run() {
  config.ensureParameters();

  const cr = new CustomerReader(config.dataFilePath);
  const allCustomers = await cr.readData();

  const cp = new CustomerProcessor(allCustomers);
  const customersInRange = cp.getCustomersInRange();

  const cf = new CustomerFormatter(customersInRange);
  cf.printCustomers();
}

run().catch((err) => {
  console.log(err);
  process.exit(1);
});
