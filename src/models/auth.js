'use strict';
const { UUIDV4 } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Auth.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    userId: DataTypes.UUID,
    lastLoginAt: DataTypes.DATE,
    lastLogoutAt: DataTypes.DATE,
    tokenSession: DataTypes.TEXT,
    refreshToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Auth',
  });
  return Auth;
};