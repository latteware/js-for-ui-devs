const React = require('react')
const ReactDOM = require('react-dom')

const Button = React.createClass({
	render: function() {
		var button
		if(this.props.disabled){
			button = <button type="button" className="btn btn-lg btn-primary" disabled="disabled">Send</button>
		}else{
			button = <button type="submit" className="btn btn-lg btn-primary">Send</button>
		}

		return <div className="form-group">
			<div className="col-sm-10 col-sm-offset-2">
				{ button }
			</div>
		</div>
	}
})

module.exports = Button