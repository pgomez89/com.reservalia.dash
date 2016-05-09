"use strict";

module.exports = {
  getToday: () => {
    var today = new Date();
    return today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  },
  getOneMonthAgo: () => {
    var today = new Date();
    var month = today.getMonth() - 1;
    return today.getDate() + "/" + month + "/" + today.getFullYear();
  }
};
