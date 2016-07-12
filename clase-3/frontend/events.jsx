var React = require('react')
var ReactDOM = require('react-dom')
var request = require('browser-request')
 
const ListView = React.createClass({
	getInitialState: function(){
		return {
			posts: [
				{name:'Lolz', description:'cat'}
			]
		}
	},
	nameChange: function(event){
		this.setState({name: event.target.value});
	},
	descriptionChange: function(event){
		this.setState({description: event.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var name = this.state.name.trim();
		var description = this.state.description.trim();
		if (!name || !name) {
			return;
		}
		
		this.state.posts.push({
			name,
			description
		})
		this.setState({name: '', description: ''});
	},
	componentDidMount: function(){

	},
	render: function() {
		var list = this.state.posts.map(function(item, i){
			return <div key={i}>
				<h2>{item.name}</h2>
				<p>{item.description}</p>
			</div>
		})

		return <div>
			<div>
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label className="col-sm-2 control-label">Product Name</label>
						<div className="col-sm-10">
							<input type="text" className="form-control product-name" id="product-name" placeholder="Product name" value={this.state.name} onChange={this.nameChange}/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Description</label>
						<div className="col-sm-10">
							<textarea className="form-control description" id="description" placeholder="Description for product" value={this.state.description} onChange={this.descriptionChange}></textarea>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-primary btn-block">Crear</button>
						</div>
					</div>
				</form>				
			</div>
			<div>{list}</div>
		</div>
	}
})
 
ReactDOM.render(<ListView/>, document.getElementById('content'))