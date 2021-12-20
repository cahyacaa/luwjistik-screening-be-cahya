const router = require('express').Router();
const defaultResponse = require('../common/default-response');
const authRouter = require('./auth');
const orderRouter = require('./orders');




router.get('/', defaultResponse);
router.use('/auth', authRouter);
router.use('/order', orderRouter);




module.exports = router;
