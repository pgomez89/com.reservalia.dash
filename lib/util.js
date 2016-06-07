"use strict";

module.exports = {
  encrypt: function (text) {
    var crypto = require("crypto");
    var hash = crypto.createHash("sha1").update(text).digest("hex");
    return hash;
  }
};
