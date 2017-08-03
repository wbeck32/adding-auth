const req = require('../helpers/request');
const chai = require('chai');
const assert = chai.assert;

describe('user security API', () => {
  let token = '';

  before(() => {
    return req
      .post('/users/signup')
      .send({
        email: 'me@me.com',
        password: 'abc',
        roles: [{ admin: 0, manager: 1, peon: 1 }]
      })
      .then(res => {
        token = res.body.token;
      });
  });

  it('creates a token', () => {
    // console.log('token: ', token);
  }), it('validates a user creating an account then adds them', () => {
    //check for unique user name/email
    //sends user info in payload
    //saves token
  }), it('checks credentials when a user tries to sign in then retrieves the user', () => {
    //retrieves token - from db? from local machine?
  }), it('gets all users', () => {
    // don't expose tokens
  }), it('checks user role', () => {});
});

// get all, get, add new (post).
// signup, sign in
// Bonus: checks user role, allows special access
