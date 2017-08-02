process.env.MONGODB_URI = 'mongodb://localhost:27017/adding-auth';
require('../../lib/connect');
const connection = require('mongoose')
    .connection;
// const testHelper = require('./test-helper');

before(() => {
    connection;
    connection.dropDatabase();


});

after(()=>{
    connection.close();
})