const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
module.exports = {
    entry: {
        main: "./src/js/main.js"
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/html/indexTemplate.html"
        }),

        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },

    mode: "production"
}