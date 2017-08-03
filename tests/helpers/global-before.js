const connect = require('../../lib/connect');
const dbUri = 'mongodb://localhost:27017/adding-auth';
const db = require('./db');

before(() => {
  connect(dbUri);
  db.dropDb();
});

after(() => {
  // connect.close();
});
