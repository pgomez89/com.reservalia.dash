process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('config');
var webpackConfig = require('./webpack.config');

var host = 'localhost';
var expressPort = 3000;
var devServerPort = 3001;

var serverApp = 'http://localhost:' + expressPort;

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: [ config.get('buildDirectory'), '/' ].join(''),
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true,
  hot: true,
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  proxy: { '*': serverApp }
}).listen(devServerPort, host, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Monitor Dev Server running at ' + host + ':' + devServerPort );
});
