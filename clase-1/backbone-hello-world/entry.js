const $ = require('jquery')
window.$ = $

const _ = require('underscore')
window._ = _

const Backbone = require('backbone')

const ToDoListModel = Backbone.Model.extend({})

const ToDoListCollection = Backbone.Collection.extend({
	model: ToDoListModel
})

const toDoListCollection = new ToDoListCollection()
window.toDoListCollection = toDoListCollection

const ToDoListView = Backbone.View.extend({
	collection: toDoListCollection,
	events: {
		'click .todo': 'todoClicked'
	},
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render)
		this.listenTo(this.collection, 'remove', this.render)
		this.listenTo(this.collection, 'change', this.render)
	},
	todoClicked: function(e){
		const model = window.toDoListCollection.findWhere({
			uuid:$(e.currentTarget).data('uuid')
		})

		model.destroy()
	},
	render: function(){
		var self = this

		this.$el.html('')
		this.collection.each(function(model){
			self.$el.append('<div class="todo" data-uuid="'+model.get('uuid')+'">'+model.get('title')+'</div>')
		})
	}
})

const ToDoListCounterView = Backbone.View.extend({
	collection: toDoListCollection,
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render)
		this.listenTo(this.collection, 'remove', this.render)		
	},
	render: function(){
		this.$el.html('<div>'+this.collection.length+'</div>')
	}
})

const toDoListView = new ToDoListView()

$('body').append(toDoListView.$el)
toDoListView.render()

const toDoListCounterView = new ToDoListCounterView()
$('body').append(toDoListCounterView.$el)
toDoListCounterView.render()


window.toDoListView = toDoListView

toDoListCollection.add({title:'To Do 1', uuid:1})
toDoListCollection.add({title:'To Do 2', uuid:2})






