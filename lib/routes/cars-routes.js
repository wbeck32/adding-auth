const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Car = require('../models/car-model');

router
    .post('/', jsonParser, (req, res, next) => {
        const car = new Car(req.body);

    })

    .get('/', jsonParser, (req, res, next) => {

    })


    .use(jsonParser);

module.exports = router;