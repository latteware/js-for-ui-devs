const db = require('../lib/db')
const Schema = require('mongoose').Schema
const v4 = require('node-uuid').v4

const orderSchema = new Schema({
	products:[{
		quantity: Number,
		product: { type: Schema.Types.ObjectId, ref: 'Product' }
	}],
	uuid: { type: String, default: v4 }
})

orderSchema.options.toJSON = {
	transform: function(doc, ret, options) {
		delete ret._id
		delete ret.__v
		return ret
	}
}

const Order = db.model('Order', orderSchema)

module.exports = Order
