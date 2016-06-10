var path = require( 'path' );

module.exports = {
  description() {
    return 'Generates a reducer/actions/constant Module for redux';
  },
  locals: function(options) {
    var reducersAbsolutePath =  path.resolve(
          options.settings.getSetting('reducers'),
          options.settings.getSetting('sourceBase')
        );
    options.reducersRelativePath = path.relative(__dirname, reducersAbsolutePath );
    return options;
  },
  fileMapTokens() {
    return {
      __reducer__: (options) => {
        return 'reducers';
      }
    };
  }
};
