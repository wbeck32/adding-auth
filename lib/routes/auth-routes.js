const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const User = require('../models/user-model');
const Auth = require('../models/auth-model');
const JWT = require('../auth/token-service');

//some routes should be protected by middleware

router
  .post('/', jsonParser, (req, res, next) => {
    const auth = new Auth(req.body);
  })
  // siginin - return JWT token on success

  // signup - return JWT token on success

  // verify

  .get('/', jsonParser, (req, res, next) => {})
  .use(jsonParser);

module.exports = router;
