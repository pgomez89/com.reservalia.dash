var path = require( 'path' );

module.exports = {
  description() {
    return 'Generates a Presentational React Components';
  },
  locals: function(options) {
    var absolutePath =  path.resolve(
          options.settings.getSetting('sourceBase'),
          options.settings.getSetting('dumbPath')
        );
    options.testPath = path.relative(__dirname, absolutePath );
    return options;
  },
  fileMapTokens() {
    return {
      __component__: (options) => {
        return options.settings.getSetting('dumbPath');
      }
    };
  }
};
