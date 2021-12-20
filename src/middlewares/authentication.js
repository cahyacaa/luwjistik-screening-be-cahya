const HttpError = require('../common/http-error');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const AuthRepository = require('../repository/auth');
const UserRepository = require('../repository/users');


exports.decodeToken = (req, res, next) => {
  // parse bearer
  let token;
  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2) {
      if (/^Bearer$/i.test(parts[0])) {
        token = parts[1];
      }
    }
  }
  if (!token) {
    return next(new HttpError('Authorization required', 401));
  }
  const isVerified = jwt.verify(token, config.appConfig.secret);
  if(!isVerified){
      return next(new HttpError('Token Invalid', 403));
  }
  const decodedToken = jwt.decode(token);
  req.auth = decodedToken;
  return next();
};

exports.loginCheck = async (req,_res,next) =>{
  const auth = req.auth;
  const authRecord = await AuthRepository.findOne('userId', auth.id);
  const userData = await UserRepository.findByPk(auth.id,{
    raw: true
  });
  if(!authRecord?.tokenSession || !userData){
    return next(new HttpError('User not found or already logout', 403));
  }
  return next();
};