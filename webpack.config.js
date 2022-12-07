const HtmlWebPackPlugin = require("html-webpack-plugin")

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    plugins:[new HtmlWebPackPlugin({
        template: './src/index.html'
    })]
}