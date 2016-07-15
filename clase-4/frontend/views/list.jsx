const React = require('react');
const ReactDOM = require('react-dom');

const datalayer = require('../lib/datalayer')

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {}

		this.state.model = props.model
	}

	render() {
		return <div>{this.state.model.title}</div>
	}
}

class List extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
		this.state.items = props.collection

		console.log('HelloWorld')
	}

	render() {
		const items = this.state.items.map(function(item, i){
			return <ListItem key={i} model={item} />
		})

		return <div>
			<h2>List</h2>
			{items}
		</div>
	}
}

module.exports = List