const path = require('path')
const gulp = require('gulp')
const webpack = require('webpack')
const gutil = require('gulp-util')
const env = require('gulp-env');

const CompressionPlugin = require('compression-webpack-plugin')
const webpackConfig = require('./webpack.config')

const webpackConfigProd = webpackConfig
webpackConfig.resolve.alias.react = 'react-lite'
webpackConfig.resolve.alias['react-dom'] = 'react-lite'
webpackConfig.resolve.alias.config = path.join(__dirname, 'frontend/config', 'production' )

webpackConfigProd.devtool = null

webpackConfigProd.plugins = []
webpackConfigProd.plugins.push( new webpack.optimize.UglifyJsPlugin({minimize: true}) )
webpackConfigProd.plugins.push( new CompressionPlugin({
	asset: '[file].gz',
	algorithm: 'gzip',
	regExp: /\.js$|\.html$/,
	threshold: 500,
	minRatio: 0.8
}) )

gulp.task('compile-for-production', function (callback) {
	webpack(webpackConfigProd, function (err, stats) {
		if (err) {throw new gutil.PluginError('webpack', err)}
		const statsAsString = stats.toString({})

		gutil.log('[webpack]', statsAsString )
	})
})
