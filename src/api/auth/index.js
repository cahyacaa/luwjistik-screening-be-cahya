const router = require('express').Router();
const { decodeToken } = require('../../middlewares/authentication');

const { loginWithEmail, logout, refreshToken } = require('./controller');

router.post('/login', loginWithEmail);
router.post('/logout', decodeToken ,logout);
router.post('/refresh-token', refreshToken );


module.exports = router;