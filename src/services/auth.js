const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../repository/users');
const config = require('../../config');

exports.comparePassword = function (password, savedPassword) {
  // use bcrypt
  return bcrypt.compare(password, savedPassword);
};

exports.generateToken = async function (userId, login= true) {
  const res = await User.findByPk(userId);

  const payload = {
    id: res.id,
    name: res.name,
  };
  let refreshToken;
  if(login) refreshToken = jwt.sign(payload, config.appConfig.refreshTokenSecret, {
    expiresIn: '24h'
  });
  const token = jwt.sign( payload, config.appConfig.secret, {
      expiresIn: '3h'
  });
  return {
    token,refreshToken
  };
};

exports.verifyRefreshToken = async (token) => {
  const result = jwt.verify(token, config.appConfig.refreshTokenSecret);
  if (!result) {
    return false;
  }
  return result;
};