
const webpack = require('webpack')
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		//contentBase: baseWebpackConfig.externals.paths.dist,
		port: 8081,
		overlay: true,
		open: true,
		host: '192.168.0.100'
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		})
	]
})

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig)
})
