const router = require('express').Router();
const { decodeToken, loginCheck } = require('../../middlewares/authentication');
const pagination = require('../../middlewares/pagination');
const {listOrders, create} = require('./controller');

router.use(decodeToken, loginCheck);
router.get('/:orderId', pagination,listOrders);
router.post('/',create);




module.exports = router;
