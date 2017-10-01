const express = require('express');
const router = express.Router();
const User = require('../models/User');
const tokenService = require('../auth/token-service');

function hasRequiredFields(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({
      code: 400,
      error: 'Both email and password are required.'
    });
  }
  next();
}

router
  .post('/verify', hasRequiredFields, (req, res, next) => {
    res.send({ valid: true });
  })
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
      .then(savedUser => {
        return tokenService.sign(savedUser);
      })
      .then(token => res.send({ token }))
      .catch(next);
  })
  .post('/signin', hasRequiredFields, (req, res, next) => {
    const { email, password } = req.body;
    delete req.body.password;

    User.findOne({ email })
      .then(user => {
        if (!user || !user.comparePassword(password)) {
          throw next({
            code: 401,
            err: 'Invalid login'
          });
        }
        return user;
      })
      .then(user => tokenService.sign(user))
      .then(token => res.send({ token }))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    const query = req.query ? req.query : null;
    User.find(query)
      .then(allUsers => {
        let usersToSend = [];
        allUsers.forEach(ele => {
          ele.password = null;
          usersToSend.push(ele);
        });

        return res.send(usersToSend);
      })
      .catch(next);
  });

module.exports = router;
