const React = require('react');
const ReactDOM = require('react-dom');

const collection = [
	{title: 'First', description:'This is the first item'},
	{title: 'Second', description:'This is the second item'},
	{title: 'Third', description:'This is the third item'}
]

// const List = require('./views/list.jsx')
const ListItem = require('./views/list.jsx').ListItem

ReactDOM.render(<ListItem model={collection[0]}/>, document.getElementById('content'))
 