'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nib = require('nib');

var config = require('config');

var isDev = (process.env.NODE_ENV === 'development');
var appEntry = './client/app';

var defineEnvPlugin = new webpack.DefinePlugin({
  __DEV__: isDev
});

var entryScripts = [ appEntry ];
var output = {
  path: path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
  filename: 'monitor.js',
  publicPath: '/'
};

let extractCSS = new ExtractTextPlugin('monitor.css');

var plugins = [
  defineEnvPlugin,
  extractCSS,
  new webpack.NoErrorsPlugin(),
];



var moduleLoaders = [
  {
    test: /\.js$/,
    loaders: [ 'babel' ],
    exclude: /node_modules/,
    include: __dirname
  }, {
    test: /\.css?$/,
    loaders: [ extractCSS.extract('style-loader', 'css-loader'), 'raw' ],
    include: __dirname
  }, {
    test: /\.styl?$/,
    loader: extractCSS.extract('style-loader', 'css-loader!stylus-loader'),
    include: __dirname
  },
   {test: /\.scss$/i, loader: extractCSS.extract(['css','sass']), include: __dirname},
];

if (isDev) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  entryScripts = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    appEntry
  ];

  moduleLoaders = [
    {
      test: /\.js$/,
      loaders: [ 'react-hot', 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: [ 'style-loader', 'css-loader' ],
      include: __dirname
    }, {
      test: /\.styl?$/,
      loaders: [ 'style-loader', 'css-loader', 'stylus-loader' ],
      include: __dirname
    },
    {
      test: /\.scss$/,
      loaders: [ 'style', 'css', 'sass'],
      include: __dirname
    }
  ];

}

module.exports = {
  devtool: 'eval',
  entry: entryScripts,
  output: output,
  plugins: plugins,
  module: {
    loaders: moduleLoaders
  },
  stylus: {
    use: [ nib() ]
  }
};
