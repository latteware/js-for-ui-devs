const React = require('react');
const ReactDOM = require('react-dom');

const collection = [
	{title: 'First'},
	{title: 'Second'},
	{title: 'Third'}
]

const List = require('./views/list.jsx')

ReactDOM.render(<List collection={collection}/>, document.getElementById('content'))
