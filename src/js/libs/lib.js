"use strict";

module.exports = {
  getToday: () => {
    var today = new Date();
    return today.getDate() + "/" + (today.getMonth() + 1) + "/" +today.getFullYear();
  },
  getOneMonthAgo: () => {
    var today = new Date();
    return today.getDate() + "/" + today.getMonth() + "/" +today.getFullYear();
  },
  formatDate: (date) => {
    var arrayDate = date.split('/');
    for(let i=0;i<arrayDate.length;i++){
      if(parseInt(arrayDate[i])<10){
        arrayDate[i] = "0"+parseInt(arrayDate[i]);
      }
    }
    console.log(date);
    return arrayDate[2]+"-"+arrayDate[1]+"-"+arrayDate[0];
  },
  sortData : (data,typeSort,key) => {
    var tSort = typeSort == 'ASC' ? 'DESC' : 'ASC';
    var newData = data.slice();
    switch (tSort) {
      case 'ASC':
        return newData.sort((a,b) => a[key]-b[key]);
      case 'DESC':
        return newData.sort((a,b) => b[key]-a[key]);
      default:
        return newData;
    }
  }
};
