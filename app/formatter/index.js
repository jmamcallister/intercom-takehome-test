class CustomerFormatter {
  constructor(data) {
    this.data = data;
  }

  printCustomers() {
    this.sortCustomersByIdAscending();
    this.data.forEach((customer) => console.log(`${customer.user_id}\t${customer.name}`));
  }

  sortCustomersByIdAscending() {
    this.data.sort((cur, next) => (cur.user_id > next.user_id) - (cur.user_id < next.user_id));
  }
}

module.exports = CustomerFormatter;
