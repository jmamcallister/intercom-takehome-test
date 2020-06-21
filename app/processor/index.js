const config = require('../config');
const util = require('../util');

class CustomerProcessor {
  constructor(data) {
    this.data = data;
  }

  getCustomersInRange() {
    return this.data.filter((customer) => this.isCustomerInRange(customer));
  }

  isCustomerInRange(customer) {
    const distance = util.greatCircleDistance(
      config.startingLatitude,
      config.startingLongitude,
      parseFloat(customer.latitude),
      parseFloat(customer.longitude)
    );
    return distance <= config.rangeInKilometers * 1000;
  }
}

module.exports = CustomerProcessor;
