const HttpError = require("../../common/http-error");
const UserRepository = require("../../repository/users");
const AuthRepository = require("../../repository/auth");
const {comparePassword, generateToken} = require('../../services/auth');
const { loginReponse } = require('./schema/auth');


async function loginWithEmail(req,res, next){
    const data = req.body;
    const userData = await UserRepository.findOne('email', data.email);
    if(!userData){
        return next(new HttpError('User not found', 400));
    }else if(!data.password) return next(new HttpError('password is empty',400));
    const comparedPassword = await comparePassword(data.password, userData.password);
    if(!comparedPassword){
        return next(new HttpError('Password is wrong', 400));
    }
    const jwt = await generateToken(userData.id);
    const authPayload = {
        tokenSession :jwt.token,
        refreshToken: jwt.refreshToken,
        lastLoginAt : Date.now(),
        userId : userData.id,
    };
    await AuthRepository.upsertById(userData.id,authPayload);
    const response = loginReponse(userData);
    delete userData.password;
    return res.API.success({
        ...response,
        ...jwt
    });
}


async function logout(req,res){
    const authData = req.auth;
    const data = {
        tokenSession : null,
        refreshToken: null,
        lastLogoutAt: Date.now()
    };
    await AuthRepository.updateForeignKeyId(authData.id,data);
    return res.API.success();
}



async function refreshToken(req,res,next){
    const {refreshToken, userId} = req.body;
    const refreshTokenRecord = await AuthRepository.findOne('userId', userId);
    if(!refreshToken || refreshToken !== refreshTokenRecord.refreshToken){
        return next(new HttpError('token invalid'));
    }
    const decodedToken = await verifyRefreshToken(refreshToken);
    if(decodedToken.id !== userId){
        return next(new HttpError('forbidden', 403));
    }
    const newToken = await generateToken(userId, false);
    await AuthRepository.upsertById(userId,{tokenSession: newToken.token});
    return res.API.success(newToken);

}

module.exports = {loginWithEmail, logout, refreshToken};