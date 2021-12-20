const router = require('express').Router();
const { decodeToken } = require('../../middlewares/authentication');
const pagination = require('../../middlewares/pagination');
const {listOrders, create} = require('./controller');

router.use(decodeToken);
router.get('/:orderId', pagination,listOrders);
router.post('/',create);




module.exports = router;
