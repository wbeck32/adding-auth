const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler')(); //this require will run the function in the error handler
// const errorHandler = require('./error-handler');
const checkDb = require('./check-connection')();

// Not quite sure what this does
// My guess:
// associates API path names with the correct router files

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
