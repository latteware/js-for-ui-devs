module.exports = {
	entry: {
		"simple-list": './frontend/simple-list.jsx',
		"product-list": './frontend/main.jsx',
		"product-list-tester": './frontend/tester.jsx'
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
			},
			{
				test: /\.js?$/,
				loader: 'babel',
				query: {
					presets:['es2015']
				}
			}			
		]
	}
}