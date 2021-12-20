const {Auth} = require('../models');

const AuthRepository = {
  async findOne(field,params){
    const result = await Auth.findOne({
      where : {
        [field] : params
      },
      raw :true
    });
    return result;
  },

  async create(data) {
    const result = await Auth.create(data);
    return result.get({plain:true});
  },

  async upsertById(uid, data) {
    const result = await this.findOne('userId', uid);
    if(!result){
      return await this.create(data);
    }else{
      return await Auth.update(data, {
        where: {
          userId : uid
        }
      });
    }
  },

  async updateForeignKeyId(uid, data) {
    return await Auth.update(data, {
      where: {
        userId: uid
      }
    });
  }

};

module.exports = AuthRepository;