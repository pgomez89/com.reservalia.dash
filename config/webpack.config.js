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

let entryScripts = [ appEntry ];

let output = {
  path: path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
  filename: 'bundle-[hash].js',
  publicPath: '/'
};

let extractCSS = new ExtractTextPlugin( 'bundle-[hash].css', { disable: isDev } );

let plugins = [
  defineEnvPlugin,
  extractCSS,
  new webpack.NoErrorsPlugin(),
  new ManifestPlugin(),
  new HtmlWebpackPlugin({
    template: path.join( __dirname, '/server/views/templates/layout.dev.ejs' ),
    filename: path.join( __dirname, '/server/views/layout.ejs' )
  })
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

let jsModuleLoaders = [ 'babel' ];

if (isDev) {
  output.publicPath = 'http://localhost:3000/';
  plugins.push( new webpack.HotModuleReplacementPlugin() );

  entryScripts = entryScripts.concat( [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ] );

  jsModuleLoaders = [ 'react-hot', 'babel' ];

}

loaders.push ( {
      test: /\.js$/,
      loaders: jsModuleLoaders,
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
