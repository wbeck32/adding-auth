require('dotenv').config();
const jwt = require('jsonwebtoken-promisified');
const appSecret = process.env.APP_SECRET || 'changeit';

module.exports = {
  async sign(user) {
    const payload = {user};
    const token = await jwt.signAsync(payload, appSecret);
    user.auth = token
    return ({user, token})
  },
  async verify(token) {
    const verifiedUser = await jwt.verifyAsync(token, appSecret)
    if (verifiedUser) return verifiedUser;
    return ({ code: 401, error: 'Authorization Failed' });
  }
};
