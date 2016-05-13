"use strict";

module.exports = {
  getToday: () => {
    var today = new Date();
    return today.getFullYear() + "-" + today.getMonth() + "-" +today.getDate();
  },
  getOneMonthAgo: () => {
    var today = new Date();
    var month = today.getMonth() - 1;
    return today.getFullYear() + "-" + month + "-" +today.getDate();
  }
};
