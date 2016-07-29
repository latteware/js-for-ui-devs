import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import request from 'browser-request'

let fetchSubreddit = function(subreddit){
	var state = store.getState()

	store.dispatch({
		type: 'LOADING_SUBREDDIT',
		subreddit
	})

	request.get({
		uri: 'https://www.reddit.com/r/'+subreddit+'.json',
		json: true
	}, function(err, res, body){
		if(err){return console.log('Couldn\'t load ', err)}

		const posts = body.data.children.map(function(item){
			return item.data
		})			

		store.dispatch({
			type: 'LOADED_SUBREDDIT',
			subreddit,
			posts
		})		
	})
}

// Creamos un componente
let Form = ({ subreddit, loading, posts, dispatch }) => {
	let input

	let loadElement
	if(loading){
		loadElement = <div>loading...</div>
	}

	let postsElement
	if(posts.length){
		postsElement = posts.map( (post)=>{
			return <div key={post.id}>{post.title}</div>
		})
	}	

	return <div>
		<form onSubmit={e => {
			e.preventDefault()
			if (!input.value.trim()) {
				return
			}

			fetchSubreddit(input.value)
			input.value = ''
		}}>
			<input ref={node => {
				input = node
			}} />
			<button type="submit">Add Todo</button>
		</form>

		{loadElement}

		{postsElement}
	</div>
}

// Reducer
function reducer(state = '', action) {
	console.log(state, action)

	if(action.type === 'LOADING_SUBREDDIT'){
		return {loading:true, subreddit: action.subreddit, posts:[]}
	}else if(action.type === 'LOADED_SUBREDDIT'){
		return {loading:false, subreddit: action.subreddit, posts:action.posts}
	}else{
		return {loading:false, subreddit:'', posts:[]}
	}
}

// Creamos un store
let store = createStore(reducer)


// Conectar un componente a store
function mapStateToProps(state) {
	return {
		loading: state.loading,
		posts: state.posts,
		subreddit: state.subreddit

	}
}
Form = connect(mapStateToProps)(Form)


// Rendereamos
render(
	<Provider store={store}>
		<Form/>
	</Provider>,
	document.getElementById('root')
)

window.store = store
window.fetchSubreddit = fetchSubreddit