const OrderRepository = require("../../repository/orders");


async function listOrders(req,res){
    const {orderId} = req.params;
    const result = await OrderRepository.list({
        where:{
            orderId: orderId
        },
        include:[{
            association: 'shipperData',
            attributes:{
                exclude:['id','password','createdAt','updatedAt']
            }
        }],
        order :[['createdAt','DESC']]
      }, req.pagination.offset, req.pagination.limit);
      return res.API.buildResponse(
        200,
        true,
        'ok',
        result.rows,
        {
          total: result.count,
          page: req.pagination.page,
          pagesize: req.pagination.pagesize,
        }
      );
}

async function create(req,res,next){
    const userId = req.auth.id;
    const data = req.body;
    data.shipperId = userId;
    const result = await OrderRepository.create(data);
    return res.API.buildResponse(200,true,'ok',result);
}

module.exports = {listOrders,create};