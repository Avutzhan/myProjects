var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/learn_reactjs');
//mongoose.set('useFindAndModify', false);

var ProductAPI = require('./product.api');

router.put('/product/update', ProductAPI.update);

module.exports = router;