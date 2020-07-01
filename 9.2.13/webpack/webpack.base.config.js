'use strict'

const webpack = require('webpack');
const path = require('path');
const globAll = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
}

module.exports = {

	externals: {
		paths: PATHS
	},

	entry: {
		main: './src/js/common.js',
		bb: `${PATHS.src}/js/bb.js`,
		test: './src/js/test.js'
	},
	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(png|jp(e)g|gif)$/,
				loader: 'file-loader',
				exclude: '/node_modules/',
				options: {
					name: '[name].[ext]',
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				exclude: '/node_modules/',
				options: {
					name: '[name].[ext]',
					outputPath: `${PATHS.assets}fonts`
				}
			},
			{
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
			}
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			Cookies: 'js-cookie',
			anime: 'animejs',
			//Vue: 'vue'
		}),
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`,
		}),
		// new HtmlWebpackPlugin ({
		// 	hash: false,
		// 	template: `${PATHS.src}/template.html`,
		// 	filename: 
		// })
		new CopyWebpackPlugin([
			{from: `${PATHS.src}/images`, to: `${PATHS.assets}images`},
			//{from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`},
			//{from: `${PATHS.src}/static`, to: ''},
		]),
		// new PurifyCSSPlugin({
		// 	minimize: true,
		// 	paths: globAll.sync([
		// 		path.join(__dirname, './**/*.html'),
		// 	]),
		// 	purifyOptions: {
		// 		whitelist: [
		// 			'is-active',
		// 			'is-scrolling',
		// 			'BB',
		// 			'Theme--dark',
		// 		]
		// 	}
		// })
	],
}
