const express = require('express');
const control = require('./control');

const Router = express.Router();

Router
.route('/')
.get(control.get)
.post(control.createUser)

Router
.route('/:id')
.get(control.getUser)
.patch(control.udpateUser)
.delete(control.deleteUser)

module.exports = Router;