module.exports = {
	entry: {
		"hello-world": './frontend/hello-world.jsx',
		"timer": './frontend/timer.jsx',
		"subreddit": './frontend/subreddit.jsx',
		"events": './frontend/events.jsx'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/public/build',
		sourceMapFilename: '[file].map'
	},
	devtool: ['source-map'],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: {
					presets:['es2015', 'react']
				}
			}
		]
	}
}