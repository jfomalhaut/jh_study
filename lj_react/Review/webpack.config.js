module.exports = {
	entry: [
		"@babel/polyfill",
		"./src/index.js"
	],
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	devServer: {
		contentBase: "./dist",
		port: 3000,
		historyApiFallback: true
	}
}