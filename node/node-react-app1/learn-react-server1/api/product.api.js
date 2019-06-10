var mongoose = require('mongoose');
var Product = require('../schemas/product.schema');

var ProductAPI = {
    findAll: function (request, response) {
        Product.find({}, function (error, products) {
            if (error) {
                throw error;
            } else {
                response.status(200).json(products);
            }
        });
    }
};

module.exports = ProductAPI;