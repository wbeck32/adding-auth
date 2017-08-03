// error handler
// handle bad status codes and log errors

// left over from old project:

function handleErrors(log = console.log) {
  return function errorHandler(err, req, res, next) {
    // let code, error;
    console.log(err);

    // add ifs and else ifs to handle various errors
    // set return codes and error messages
    // res.status(code).send({ error });
  };
  // set header and message for 404
}
module.exports = handleErrors;
