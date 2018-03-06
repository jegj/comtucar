const webpack = require('webpack'),
	path = require('path'),
	fs = require('fs'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin'),
	writeFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js'],
		modules: ['node_modules', 'src']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
	externals: {},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body',
		}),
		new CopyWebpackPlugin([
			{ from: 'public/css', to: 'css' },
			{ from: 'public/fonts', to: 'fonts' },
			{ from: 'public/js', to: 'js' },
			{ from: 'public/images', to: 'images' },
		])
	],
};