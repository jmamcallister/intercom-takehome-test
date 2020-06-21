const requiredParameters = require('./constants').requiredParameters;

module.exports = {
  requiredParameters: requiredParameters,
  rangeInKilometers: parseInt(process.env.INTERCOM_RANGE_KMS || '100', 10),
  dataFilePath: process.env.INTERCOM_DATA_FILE_PATH,
  startingLatitude: parseFloat(process.env.INTERCOM_STARTING_LAT || '53.339428'),
  startingLongitude: parseFloat(process.env.INTERCOM_STARTING_LON || '-6.257664'),
  ensureParameters: () => {
    requiredParameters.forEach((key) => {
      if (!process.env[key]) {
        throw new Error('Could not find environment parameter ' + key);
      }
    });
  }
};
