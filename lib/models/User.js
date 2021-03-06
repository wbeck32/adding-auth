const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    roles: {
      admin: { type: Boolean, required: true, default: false },
      manager: { type: Boolean, require: true, default: false },
      peon: { type: Boolean, require: true, default: true }
    }
  },
  { runSettersOnQuery: true }
);


userSchema.methods.setPassword = function(pw) {
  return this.password = bcrypt.hashSync(pw);
};

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.static('exists', function(query) {
  return this.find(query)
    .count()
    .then(count => count > 0);
});

module.exports = mongoose.model('User', userSchema);
