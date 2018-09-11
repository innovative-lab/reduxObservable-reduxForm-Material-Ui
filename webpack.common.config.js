'use strict'
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        // JS LOADER
        // Transpile .js files using babel-loader
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        // Bootstarp loader
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        // ASSET LOADER
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|json)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname + '/index.html'),
      inject: 'body'
    })
  ]
}
