'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.UUID
      },
      name:{
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      recipientName: {
        type: Sequelize.STRING
      },
      recipientAddress: {
        type: Sequelize.STRING
      },
      recipientPhone: {
        type: Sequelize.STRING
      },
      pickedUpBy: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      orderId: {
        type: Sequelize.STRING
      },
      shipperId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};