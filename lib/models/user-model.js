const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// Needs to verify a unique user name
// A user model that can hash passwords and also compare a subsequent password
// bcrypt to hash passwords

const userSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    roles: [
      {
        admin: { type: Boolean, required: true, default: false },
        manager: { type: Boolean, require: true, default: false },
        peon: { type: Boolean, require: true, default: true }
      }
    ]
  },
  { runSettersOnQuery: true }
);

// make this two functions - set pw and compare pw
userSchema.methods.setPassword = function(pw) {
  this.password = bcrypt.hashSync(pw);
};

userSchema.methods.comparePassword = function(user) {
  //   retrieve user token from db
  //   compare and contrast
  //   return true or false
};

// if no value is passed, this param sets the value to empty object
// options object pattern
// userSchema.static('exists', function({email = email}= {} )
// Marty passed in the parameter query because you may not always want
// to check on email, you may want to check other fields
// null counts as a value in destructuring

userSchema.static('exists', function(query) {
  return this.find(query).count().then(count => count > 0);
});

module.exports = mongoose.model('User', userSchema);
