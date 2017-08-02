const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Car = require('../models/car-model');
// user has access to cars with correct auth
//some routes should be protected by middleware


router
    .post('/', jsonParser, (req, res, next) => {
        const car = new Car(req.body);

    })

    .get('/', jsonParser, (req, res, next) => {

    })


    .use(jsonParser);

module.exports = router;