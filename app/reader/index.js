const fs = require('fs');
const readLine = require('readline');

class CustomerReader {
  constructor(path) {
    this.path = path;
  }

  async readData() {
    const data = [];

    const fileStream = fs.createReadStream(this.path);
    const rl = readLine.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    for await (const line of rl) {
      data.push(JSON.parse(line));
    }
    return data;
  }
}

module.exports = CustomerReader;
