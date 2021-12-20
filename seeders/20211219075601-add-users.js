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
    await queryInterface.bulkInsert('Users', [{
        id:'39e91527-faa9-4a54-b2e3-1e4953476c54',
        companyName: 'PT. Test Luwjistik',
        email: 'luwjistik.test@mailinator.com',
        phone:'0819283839',
        address:'Jl. Samosir No.01, Sleman, Yogyakarta',
        password:'$2b$10$Zld./h8BvapjPzbmkhtPouIByKU2Oc14Dn2XQcv7nZzbwSowN6pqW',
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
