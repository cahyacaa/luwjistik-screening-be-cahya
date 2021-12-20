'use strict';
const { UUIDV4 } = require('sequelize');
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../common/hash-password');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.Auth, {
        foreignKey: 'userId'
      });
    }
  }
  Users.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });

  Users.addHook('beforeCreate', async (user) => {
    user.email = user.email.toLowerCase();
    user.password = await hashPassword(user.password);
  });

  return Users;
};