const commonConfig = require('./webpack.common.config');
const webpack = require('webpack');
var path = require('path');
commonConfig.devtool = 'eval-source-map';
commonConfig.devServer = {
  contentBase: path.join(__dirname, "/../public"),
  //stats: 'minimal',
  port: 3000,
  hot: true,
  host: 'localhost',
  open: true
};
commonConfig.plugins.push(
  new webpack.NamedModulesPlugin(), 
  new webpack.HotModuleReplacementPlugin()
);
module.exports = commonConfig;