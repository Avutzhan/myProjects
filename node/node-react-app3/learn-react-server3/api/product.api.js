var mongoose = require('mongoose');
var Product = require('../schemas/product.schema');

var ProductAPI = {

    update: function (request, response) {

        Product.findByIdAndUpdate(
            request.body._id,
            {
                name: request.body.name,
                price: request.body.price,
                quantity: request.body.quantity,
                status: request.body.status
            },
            function (error, result) {
                if (error) {
                    throw error;
                } else {
                    response.status(200).json(result);
                }
            }
        );
    }

};


module.exports = ProductAPI;  