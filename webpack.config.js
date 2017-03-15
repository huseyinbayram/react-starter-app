var webpack = require("webpack");

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
    path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
  devServer: {
    inline: true,
    port: 3333
  }
}
