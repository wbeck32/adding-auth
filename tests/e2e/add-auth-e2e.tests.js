const req = require('../helpers/request');
const chai = require('chai');
const assert = chai.assert;
const seedPeople = require('../helpers/test-data');

describe('user security API', () => {
    let token = '';

    before(() => {
        return req.post('/users/signup')
            .send(seedPeople[0])
            .then(res => {
                token = res.body.token;
            });
    });

    function saveUser(testUser) {
        return req.post('/users/signup')
            .send(testUser)
            .then(res => {
              token = res.body.token;
            });
    }

    it('creates a user with roles', () => {
            return req.post('/users/signup')
                .send(seedPeople[1])
                .then(res => {

                    token = res.body.token;
                    assert.isOk(token);

                });
        }),
        it('fails if user doesn\'t have both email and pw', () => {
            return req.post('/users/verify')
                .send(seedPeople[2])
                .then(res => {
                    // assert.equal(res.code, 400);
                    // assert.equal(res.error, 'Both email and password are required.')
                })

        }),
        it('checks credentials then retrieves the user', () => {
            return saveUser(seedPeople[1])
                .then(person => {
                    return req.post('/users/signin')
                        .send(seedPeople[1])
                        .then(res => {
                            // console.log(res);
                            // assert.equal(seedPeople[1].email, res.body.email)
                            // console.log('res: ',res);
                        })

                })
        }),
        it('gets all users', () => {
            // don't expose tokens
        }),
        it('checks user role', () => {});
});

// get all, get, add new (post).
// signup, sign in
// Bonus: checks user role, allows special access