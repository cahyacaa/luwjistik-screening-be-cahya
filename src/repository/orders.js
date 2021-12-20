
const {Orders} = require('../models');

const OrderRepository ={
      async create(data, options={}){
        const result = await Orders.create(data,{
          ...options,
        });
        return result.get({plain:true});
      },
      
      async list(options={}, offset, limit=10){
        const result = await Orders.findAndCountAll({
          ...options,
          offset: offset,
          limit: limit,
          distinct: true
        });
        return result;
      },
};

module.exports = OrderRepository;
