const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')

const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Link = ReactRouter.Link

const App = React.createClass({
	render() {
		var content
		if(this.props.children){
			content = this.props.children
		}else{
			content = <Main/>
		}

		return (<div>
			<h1>App</h1>
			<ul>
				<li><Link to="/simple-router/">Home</Link></li>
				<li><Link to="/simple-router/about">About</Link></li>
				<li><Link to="/simple-router/inbox">Inbox</Link></li>
			</ul>
			{ content }
		</div>)
	}
})

const Main = React.createClass({
	render() {
		return <h3>Main</h3>
	}
})

const About = React.createClass({
	render() {
		return <h3>About</h3>
	}
})

const Inbox = React.createClass({
	render() {
		return (<div>
			<h2>Inbox</h2>
			{this.props.children || "Welcome to your Inbox"}
		</div>)
	}
})

const NotFound = React.createClass({
	render() {
		return <h3>404</h3>
	}
})

const router = (<Router history={ReactRouter.browserHistory}>
	<Route path="/simple-router" component={App}>
		<Route path="/simple-router/about" component={About}></Route>
		<Route path="/simple-router/inbox" component={Inbox}></Route>
		<Route path="*" component={NotFound}></Route>
	</Route>
</Router>)

ReactDOM.render(router, document.getElementById('simple-router'))


window.ReactRouter = ReactRouter