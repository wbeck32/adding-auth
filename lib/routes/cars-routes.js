const express = require('express');
const router = express.Router();
const Car = require('../models/car-model');
const ensureRole = require('../auth/ensure-role');

const adminRole = ensureRole('admin');

router
    .post('/', adminRole, (req, res, next) => {
        const car = new Car(req.body);

    })

    .get('/', (req, res, next) => {

    })


    // .use(jsonParser);

module.exports = router;

// admin user can save cars with correct auth
//some routes should be protected by middleware