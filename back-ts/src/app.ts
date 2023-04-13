'use strict'
var express = require('express');
var app = express();
var cors = require('cors');
var userController = require('../controller/userController')

app.use(cors());

app.get('/users', userController.getUsers);
app.get('/users/:user?', userController.getUser);
app.get('/users/:page?/:limit?', userController.getUsersPaginated)

module.exports = app;

