'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Orders', [{
      id:'39e91527-faa9-4a54-b2e3-1e4953476d12',
      name: 'Handphone Samsun A530E',
      status:'Out for delivery',
      weight:'1 kg',
      recipientName:'Agus Haryo',
      recipientAddress:'Jl. Kamboja, Jakarta Utara',
      recipientPhone:'0811111111',
      orderId:'111SNA011',
      shipperId:'39e91527-faa9-4a54-b2e3-1e4953476c54',
      createdAt: new Date(),
      updatedAt: new Date()

  },{
    id:'39e91527-faa9-4a53-b2e3-1e4953476d12',
    name: 'Handphone Samsun A530E',
    status:'Processed at warehouse',
    weight:'1 kg',
    recipientName:'Agus Haryo',
    recipientAddress:'Jl. Kamboja, Jakarta Utara',
    recipientPhone:'0811111111',
    orderId:'111SNA011',
    shipperId:'39e91527-faa9-4a54-b2e3-1e4953476c54',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:'39e91527-faa9-4a53-b2e3-1e4953476d12',
    name: 'Handphone Samsun A530E',
    status:'Order picked up',
    weight:'1 kg',
    pickedUpBy:'Agus Haryo',
    recipientName:'Agus Haryo',
    recipientAddress:'Jl. Kamboja, Jakarta Utara',
    recipientPhone:'0811111111',
    orderId:'111SNA011',
    shipperId:'39e91527-faa9-4a54-b2e3-1e4953476c54',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
