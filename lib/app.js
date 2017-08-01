const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler')();

// Not quite sure what this does
// My guess:
// associates API path names with the correct router files

app.use(morgan('dev'));

const cars = require('./routes/cars-routes');
const people = require('./routes/people-routes');

app.use('/cars', cars);
app.use('/people', people);

app.use(errorHandler);

module.exports = app;
