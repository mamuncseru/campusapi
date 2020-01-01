const express = require('express');
const Controller = require('./control');

const Router = express.Router();

Router
.route('/')
.get(control.get)
.post(control.post)

Router
.route('/:id')
.get(control.getByID)
.patch(control.updateByID)
.delete(control.deleteByID)

module.exports = Router;