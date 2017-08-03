const req = require('../helpers/request');
const chai = require('chai');
const assert = chai.assert;
const seedPeople = require('../helpers/test-data');

describe('user security API', () => {
  let token = '';

  before(() => {
    return req.post('/users/signup').send(seedPeople[0]).then(res => {
      token = res.body.token;
    });
  });

  it('creates a user with roles', () => {
    return req.post('/users/signup').send(seedPeople[1]).then(res => {
      token = res.body.token;
    });
  }), it('checks credentials when a user tries to sign in then retrieves the user', () => {
    //retrieves token - from db? from local machine?
  }), it('gets all users', () => {
    // don't expose tokens
  }), it('checks user role', () => {});
});

// get all, get, add new (post).
// signup, sign in
// Bonus: checks user role, allows special access
