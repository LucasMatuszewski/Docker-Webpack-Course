const path = require('path');
const webpack = require('webpack');
const manifest = require('./package.json');
const Visualize = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/app.ts'
  },
  output: {
    filename: '[name].js', // [name] = bundle (from entry: { ... })
    path: path.resolve(__dirname, 'dist'),
    library: '[name]'
  },
  mode: 'development',
  devtool: 'source-map', // default map build in Webpack
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    port: 9000,
    open: false, //default
    host: '0.0.0.0', // not localhost (with 0s it works in local network, because it use real IP)
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // in imports use .ts files first before .js
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' // starts from right, we can use multiple loaders separated by exclamation mark.
        // loader: ['style-loader', 'css-loader'] // alternative syntax
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // Define own plugin
      $VERSION: JSON.stringify(manifest.version)
    })
  ]
    .concat([new Visualize()]) // plugin to visualize and analyze a bundle and modules
    .concat([
      new HtmlWebpackPlugin({
        template: './src/assets/index.html',
        title: 'SII - Docker + Webpack', // we have to use <% %> template in index.html
        inject: 'head'
      })
    ])
};
