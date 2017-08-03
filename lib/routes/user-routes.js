const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const User = require('../models/user-model');
const tokenService = require('../auth/token-service');

//some routes should be protected by middleware
function hasRequiredFields(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log('failure');
    return next({
      code: 400,
      error: 'Both email and password are required.'
    });
  }
  next();
}

router
  .use(jsonParser)
  .post('/signup', hasRequiredFields, (req, res, next) => {
    const { email, password, roles } = req.body;
    User.exists({ email })
      .then(exists => {
        if (exists) {
          throw next({
            code: 400,
            error: 'email in use'
          });
        }
        const user = new User({
          email: email,
          roles: roles,
          password: password
        });

        user.setPassword(password);
        return user.save();
      })
      .then(user => tokenService.sign(user))
      .then(token => res.send({ token }))
      .catch(next);
  })
  // siginin - return JWT token on success

  // verify

  .get('/', jsonParser, (req, res, next) => {});

module.exports = router;
