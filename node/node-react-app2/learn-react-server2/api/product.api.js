var mongoose = require('mongoose');
var Product = require('../schemas/product.schema');

var ProductAPI = {
    create: function (request, response) {

        var newProduct = new Product({
            name: request.body.name,
            price: request.body.price,
            quantity: request.body.quantity,
            status: request.body.status
        });

        newProduct.save(function (error) {
            if (error) {
                throw error;
            }
            else {
                response.status(200).json(newProduct);
            }
        });
    }
};

module.exports = ProductAPI;