var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/learn_reactjs');

var ProductAPI = require('./product.api');

router.get('/product/findAll', ProductAPI.findAll);

module.exports = router;