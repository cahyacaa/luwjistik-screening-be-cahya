const {Users, Notifications, Carts} = require('../models');

const UserRepository = {
  async findOne(field,params, isSession = false, queryOptions={}){
    const excludeField = ['createdAt', 'updatedAt'];
    if(isSession) excludeField.push('password');
    const result = await Users.findOne({
      attributes: {
        exclude: excludeField
      },
      where : {
        [field] : params
      },
      raw :true,
      ...queryOptions
    });
    return result;
  },


  async create(data) {
    const result = await Users.create(data);
    return result.get({plain:true});
  },

  async findAll() {
    const result = await Users.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'password']
      },
      include:[{
        model: Notifications,
        as: 'notifications' 
      },
      {
        model: Carts,
        as: 'carts'
      }],
      order: [
        ['id', 'ASC']
      ],
      
    });
    return result;
  },

  async updateById(userId, data, queryOptions={}) {
    return await Users.update(data, {
      where: {
        id: userId
      },
      ...queryOptions
    });
  },

  async findByPk(userId){
    const result = await Users.findByPk(userId,{
      attributes: {
        exclude: ['password']
      }
    });
    return result;
  },

  async list(options={}, offset, limit=10){
    const result = await Users.findAndCountAll({
      ...options,
      offset: offset,
      limit: limit,
      distinct: true
    });
    return result;
  },

};

module.exports = UserRepository;