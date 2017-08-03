require('dotenv').config('tests/.env')
const connect = require('../../lib/connect');
const dbUri = process.env.MONGO_URI;
const db = require('./db');

before(() => {
  connect(dbUri);
  db.dropDb();
});
beforeEach(() => {
  db.dropDb();
});

after(() => {
  // connect.close();
});
