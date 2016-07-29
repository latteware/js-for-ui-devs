import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import config from 'config';

console.log(config)

let Label = () => {
	return (<div>
		<h1>Welcome to { config.env }</h1>
	</div>)
}

render(
	<Label></Label>,
	document.getElementById('root')
)