require('dotenv').config(); // this is important!

module.exports = {
    production: {
      username: 'root',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'sqlite',
      define: {
        freezeTableName: true
      },
      storage: 'luwjistik.sqlite',
      pool: {
        max: 10,
        min: 3,
        acquire: 30000,
        idle: 10000
      },
    },
    test: {
      username: 'root',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'sqlite',
      storage: 'test.sqlite',
      define: {
        freezeTableName: true
      }
    }
};