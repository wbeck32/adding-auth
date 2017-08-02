const user = require("../../lib/models/user-model");
const Car = require("../../lib/models/car-model");
const { assert } = require("chai");
// const mongoose = require("../../lib/connect");

const expectedValidation = () => {
  throw new Error("expected validation errors");
};



// check validity of user and car models