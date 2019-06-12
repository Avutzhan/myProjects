var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/learn_reactjs');
mongoose.set('useFindAndModify', false);

var ProductAPI = require('./product.api');

router.delete('/product/delete/:id', ProductAPI.delete);

module.exports = router;