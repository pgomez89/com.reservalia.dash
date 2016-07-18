let enviroment;
if( !process.env.NODE_ENV ){
  var fs = require('fs');
  fs.readFile('/etc/cluster.context', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    enviroment = data;
  });
}else{
  enviroment = process.env.NODE_ENV;
}

module.exports = {
  encrypt: function (text) {
    var crypto = require('crypto');
    var hash = crypto.createHash('sha1').update(text).digest('hex');
    return hash;
  },
  isDevelopmentEnv: process.env.NODE_ENV === 'development',
  isRcEnv: process.env.NODE_ENV === 'rc',
  isProductionEnv: process.env.NODE_ENV === 'prod'
};
