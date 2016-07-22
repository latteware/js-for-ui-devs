module.exports = {
	entry: {
		"simple-router": './frontend/simple-router.jsx',
		"app": './frontend/main.jsx',
		"tester": './frontend/tester.jsx'
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
				exclude: /node_modules/,
				query: {
					presets:['es2015', 'react']
				}
			},
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets:['es2015']
				}
			}			
		]
	}
}