const path = require('path')

module.exports = {
	entry: {
		"env-vars": './frontend/env-vars.jsx',
		"input": './frontend/input.jsx',
		"ajax": './frontend/ajax.jsx',
		"app": './frontend/main.jsx'
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
	},
	resolve: {
		alias: {
			config: path.join(__dirname, 'frontend/config', process.env.NODE_ENV || 'development' )
		}
	}
}