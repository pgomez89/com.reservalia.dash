var path = require( 'path' );

module.exports = {
  description() {
    return 'Connect components to actions and store';
  },
  locals: function(options) {
    var absolutePath =  path.resolve(
          options.settings.getSetting('sourceBase'),
          options.settings.getSetting('smartPath')
        );
    options.testPath = path.relative(__dirname, absolutePath );
    return options;
  },
  fileMapTokens() {
    return {
      __container__: (options) => {
        return options.settings.getSetting('smartPath');
      }
    };
  }
};
