var path = require("path");
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

var port = process.env.PORT || 8080;

var SRC_DIR = path.join(__dirname, "src");
var BUILD_DIR = path.join(__dirname, "build");

var indexSource = path.join(SRC_DIR, 'index.tsx');

module.exports = {
    debug: true,
    devtool: 'cheap-eval-source-map',
    entry: [
        indexSource,
    ],
    output: {
        path: BUILD_DIR,
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: "awesome-typescript", include: SRC_DIR}
        ]
    },
    plugins: [
        new ForkCheckerPlugin(),
        new HtmlWebpackPlugin()
    ],
    resolve: {
        root: [SRC_DIR],
        extensions: ["", ".jsx", ".js", ".tsx", ".ts", ".less", ".css"],
        modulesDirectories: ["node_modules"]
    },
    devServer: {
        port: port,
        hot: false
    }
};
