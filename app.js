const express = require('express');
const app = express();
const Route = require('./js/route.js');

app.use(express.json());

app.use('campus/user', Route);

module.exports = app;