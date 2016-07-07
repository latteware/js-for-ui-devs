module.exports = {
	entry: {
		app: './frontend/main.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/public/build',
		sourceMapFilename: '[file].map'
	},
	devtool: ['source-map'],
	loaders: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel', // 'babel-loader' is also a legal name to reference
			query: {
				presets: ['es2015']
			}
		}
	]	
}