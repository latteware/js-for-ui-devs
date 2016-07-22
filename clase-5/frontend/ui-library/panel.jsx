const React = require('react')
const ReactDOM = require('react-dom')

const Panel = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function() {
		console.log(this.props.children)

		return <div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">{ this.props.title }</h3>
			</div>
			<div className="panel-body">
				{ this.props.children }
			</div>
		</div>
	}
})

module.exports = Panel