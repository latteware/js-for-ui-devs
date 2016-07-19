module.exports = {
	entry: {
		"app": './frontend/main.jsx',
		"app-final": './frontend/main-final.jsx',
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
	// ,resolve: {
	// 	alias: {
	// 		'react': 'react-lite',
	// 		'react-dom': 'react-lite'
	// 	}
	// }
}