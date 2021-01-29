const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('error-handler');
const morgan = require('morgan');
const express = require('express');
const apiRouter = require('./api/api');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter);   

app.use(errorHandler());

app.listen(PORT, (req, res, next) => {
    console.log(`Server is listening on port: ${PORT}`);
});

module.exports = app; 