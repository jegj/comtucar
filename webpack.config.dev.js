const webpack = require('webpack'),
			path = require('path'),
			fs = require('fs'),
			HtmlWebpackPlugin = require('html-webpack-plugin'),
			CopyWebpackPlugin = require('copy-webpack-plugin'),
			writeFilePlugin = require('write-file-webpack-plugin');


module.exports = {
	context: __dirname + "/src",
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js'],
		modules: ['node_modules', 'src',],
	},
	module: {
		rules: [
			// {
			// 	test: /\.(gif|png|jpe?g|svg)$/i,
			// 	use: [
			// 		'file-loader',
			// 		{
			// 			loader: 'image-webpack-loader',
			// 			options: {
			// 				bypassOnDebug: true,
			// 			},
			// 		},
			// 	],
			// }
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../public'),
		host: '0.0.0.0',
		port: 9000,
		inline: true,
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
			{ from: '../public/css', to: 'css' },
			{ from: '../public/fonts', to: 'fonts' },
			{ from: '../public/js', to: 'js' },
			{ from: '../public/images', to: 'images' },
		])
	],
	devtool: "source-map"
};