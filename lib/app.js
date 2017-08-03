const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler')();
const checkDb = require('./check-connection')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));
if (process.env.NODE_ENV !== 'production') {
    app.use(checkDb);
}

const cars = require('./routes/cars-routes');
const users = require('./routes/user-routes');

app.use('/cars', cars);
app.use('/users', users);

app.use(errorHandler);

module.exports = app;