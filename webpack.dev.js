'use strict';

const path = require('path');
const merge = require('webpack-merge');
// 引入通用webpack配置文件
const common = require('./webpack.js');
const webpack = require('webpack');


module.exports = merge(common, {
  module: {
    rules: [
      {test: /\.ts(x?)$/,exclude: /node_modules/,use: [{loader: 'ts-loader'}]},
      {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'},
      {test:/\.vue$/,loader:'vue-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor', 'manifest' ], // 指定公共 bundle 的名字。
    }),
  ],
  // 设置出口文件地址与文件名
  output: {
    path: path.resolve('./static/build/'),
    filename: '[name].js',
    chunkFilename:'[name].js',
    publicPath:'/build/'
  },
});