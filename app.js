const express = require('express');
const app = express();
const Route = require('./js/route.js');

app.use(express.json());

app.use('/campus/users', Route);

module.exports = app;