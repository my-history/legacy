'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const globAll = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
	entry: {
		app: './src/js/common.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}, {
			test: /\.(scss|sass)$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
						config: {
							path: './postcss.config.js'
						}
					}
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: true,
						config: {
							path: 'src/js/postcss.config.js'
						}
					}
				},
			]
		}],
	},
	watch: true,
	devServer: {
		overlay: true
	},
	devtool: 'eval',
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new PurifyCSSPlugin({
			minimize: true,
			paths: globAll.sync([
				path.join(__dirname, './**/*.html'),
			])
		})
	],
}
