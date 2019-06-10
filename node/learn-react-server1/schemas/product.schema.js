var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	price: Number,
	quantity: Number,
	status: Boolean
}, {
	versionKey: false
});

module.exports = mongoose.model('Product', ProductSchema, 'product');