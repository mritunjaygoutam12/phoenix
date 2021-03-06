module.exports = {
	devtool: 'source-map',
	entry: './src/app.js',
	output: {
		path: `${__dirname}/js`,
		chunkFilename: '[name].demo.chunk.js',
		filename: "demo.bundle.js",
		publicPath: 'apps/demo/js/'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}]
	}
}
