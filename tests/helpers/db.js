// database helpers
// - drop db
// - get token - use token service?

const connection = require('mongoose').connection;

module.exports = {
  dropDb() {
    return connection.dropDatabase();
  }
};
