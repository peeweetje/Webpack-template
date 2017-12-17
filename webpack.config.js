const webpack = require("webpack");
const path = require("path"); // nodejs dependency when dealing with paths
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin"); // extract css into dedicated file
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // require webpack plugin

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "output.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.scss$/, //files ending with .scss
        use: ExtractTextWebpackPlugin.extract({
          // call our plugin with extract method
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader" //fallback for any CSS not extracted
        }) // end extract
      }
    ] // end rules
  },
  plugins: [
    // webpack plugins
    new ExtractTextWebpackPlugin("styles.css"), // call the ExtractTextWebpackPlugin constructor and name the css file
    new webpack.optimize.UglifyJsPlugin() // call the uglify plugin
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./public"), // A directory or url to serve html content from.
    historyApiFallback: true, // fallback to /index.html for SPA
    inline: true, // inline mode(set to false to disable including client scripts(like livereload))
    open: true // open default browser while launching
  },
  devtool: "eval-source-map" // enable devtool for better debugging experience
};

module.exports = config;
