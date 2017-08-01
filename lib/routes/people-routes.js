const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Person = require('../models/person-model');

router
    .post('/', jsonParser, (req, res, next) => {
        const person = new Car(req.body);

    })

    .get('/', jsonParser, (req, res, next) => {

    })


    .use(jsonParser);

module.exports = router;
