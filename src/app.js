require('express-async-errors');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const responseFormat = require('./middlewares/response-format');
const requestLogger = require('./middlewares/request-log');
const errorHandling = require('./middlewares/error-handling');
const router = require('./api');
const notFoundMiddleware = require('./middlewares/not-found');

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(requestLogger());
app.use(responseFormat);
app.use('/api/v1', router);
app.use(notFoundMiddleware);
app.use(errorHandling);



module.exports = app;