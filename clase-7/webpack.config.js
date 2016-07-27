var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: {
		"hello-world": './frontend/hello-world.jsx',
		"dispatcher": './frontend/dispatcher.jsx',
		"dispatcher-with-tools": './frontend/dispatcher-with-tools.jsx'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/public/build',
		sourceMapFilename: '[file].map'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolveLoader: {
		'fallback': path.join(__dirname, 'node_modules')
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loaders: ['babel'],
			exclude: /node_modules/,
			include: __dirname,
		}, {
			test: /\.js$/,
			loaders: ['babel'],
			include: path.join(__dirname, '..', '..', 'src')
		}, {
			test: /\.css?$/,
			loaders: ['style', 'raw'],
			include: __dirname
		}]
	}
};
