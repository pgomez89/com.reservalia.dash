let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let nib = require('nib');
let ManifestPlugin = require('webpack-manifest-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let config = require('config');

let isDev = (process.env.NODE_ENV === 'development');
let appEntry = './client/app';

let defineEnvPlugin = new webpack.DefinePlugin({
  __DEV__: isDev
});

let jsxLoader = (isDev) ? 'react-hot!babel' : 'babel';


let entryScripts = [ appEntry ];

let output = {
  path: path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
  filename: 'monitor.js',
  publicPath: '/'
};

let extractCSS = new ExtractTextPlugin( 'monitor.css', { disable: isDev } );

let plugins = [
  defineEnvPlugin,
  extractCSS,
  new webpack.NoErrorsPlugin()
];


let loaders = [
 {
    test: /\.css?$/,
    loaders: [ extractCSS.extract('style-loader', 'css-loader'), 'raw' ],
    include: __dirname
  },
  {
    test: /\.styl?$/,
    loader: extractCSS.extract('style-loader', 'css-loader', 'stylus-loader'),
    include: __dirname
  },
  {
    test: /\.scss$/i, 
    loader: extractCSS.extract(['css','sass']),
    include: __dirname
  },
  { test: /\.ejs$/, loader: 'ejs-compiled' }
];

 
if (isDev) {
  plugins.push( new webpack.HotModuleReplacementPlugin() );

  entryScripts = [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './client/app.js'
  ];

}

// JavaScript and React JSX Files
loaders.push ( {
      test: /\.jsx?$/,
      loader: jsxLoader,
      exclude: /node_modules/,
      include: __dirname
    } );

module.exports = {
  devtool: 'eval',
  entry: entryScripts,
  output,
  plugins,
  module: { loaders },
  stylus: { use: [ nib() ] }
};
