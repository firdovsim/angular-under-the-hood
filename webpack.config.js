const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	context: path.join(__dirname, "src"),
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	},
	devtool: "eval",
	devServer: {
		port: 4200
	},
	mode: "development",

	plugins: [
		new HtmlWebpackPlugin({
			title: "Vanilla JS",
			template: "./index.html"
		}),
	]
}