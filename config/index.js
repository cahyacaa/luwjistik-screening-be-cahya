require('dotenv').config(); // this is important!

module.exports = {
  appConfig: {
    secret: process.env.SECRET,
    refreshTokenSecret: process.env.SECRET_REFRESH_TOKEN,
    port: process.env.PORT
  }
};