const Backbone = require('backbone')

const Model = Backbone.Model.extend({
	urlRoot : '/products',
	idAttribute: 'uuid'
})

const Collection = Backbone.Collection.extend({
	model: Model,
	url: '/products'
})

module.exports = {
	Model,
	Collection
}