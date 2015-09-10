var webpack = require('webpack');
var glob = require("glob");

module.exports = {
  entry: {
    app: "./src/main.js",
    spec: glob.sync("./spec/**/*Spec.js"),
  },
  output: {
    filename: '[name].js',
    path: "./build",
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /Spec\.js$/,
        loaders: ['mocha', 'babel'],
      },
    ],
  },
  resolve: {
    root: './src',
    extensions: ['', '.js']
  },
  devServer: {
    contentBase: "./build",
    port: 8081,
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
