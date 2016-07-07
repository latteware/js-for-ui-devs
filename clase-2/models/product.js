const db = require('../lib/db')
const Schema = require('mongoose').Schema
const v4 = require('node-uuid').v4

const productSchema = new Schema({
	name: { type: String, require: true },
	description: { type: String, require: true },
	uuid: { type: String, default: v4 }
})

productSchema.options.toJSON = {
	transform: function(doc, ret, options) {
		delete ret._id
		delete ret.__v
		return ret
	}
}

const Product = db.model('Product', productSchema)

module.exports = Product
