const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler')();

// Not quite sure what this does
// My guess:
// associates API path names with the correct router files

app.use(morgan('dev'));

const cars = require('./routes/cars-routes');
const users = require('./routes/people-routes');

app.use('/cars', cars);
app.use('/users', users);

app.use(errorHandler);

module.exports = app;
