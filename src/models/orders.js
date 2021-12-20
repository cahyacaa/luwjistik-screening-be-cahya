'use strict';
const {
  UUIDV4
} = require('sequelize');
const {
  Model
} = require('sequelize');
const { ordersConstant, status } = require('../constants/orders');
module.exports = (sequelize, DataTypes) => {
  
  const statusConstant = ordersConstant(status);
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Users, {
        foreignKey: 'shipperId',
        as:'shipperData'
      });
    }
  }
  Orders.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      validate:{
        isIn:[statusConstant]
      },
      allowNull: false,
      defaultValue: status.PICKED_UP
    },
    recipientName: {
      type: DataTypes.STRING
    },
    pickedUpBy: {
      type: DataTypes.STRING
    },
    recipientAddress: {
      type: DataTypes.STRING
    },
    recipientPhone: {
      type: DataTypes.STRING
    },
    orderId: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.STRING
    },
    shipperId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};