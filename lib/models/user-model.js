const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// Needs to verify a unique user name
// A user model that can hash passwords and also compare a subsequent password
// bcrypt to hash passwords

const userSchema = new Schema({

});

module.exports = mongoose.model('User', userSchema);