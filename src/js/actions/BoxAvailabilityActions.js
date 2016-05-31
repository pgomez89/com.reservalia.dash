"use strict";
import {CHARGE_VALUE,GET_AVAILABILITY} from '../constants/ActionTypes';

module.exports = {
  chargeInput : (text, name) => {
    return {
      type: CHARGE_VALUE,
      name,
      text
    }
  },
  getDataAvailabilty : (content) => {
    for(let i= 0;i<content.length;i++){
      content[i].porcentaje=Math.round((content[i].sinDisponibilidad/content[i].total) * 100);
    }
    return {
      type: GET_AVAILABILITY,
      payload: {
        content
      }
    }
  },
  sortData:(content,typeSort,key) => {
    return {
      type: 'SORT_DATA',
      payload: {
        content,
        typeSort,
        key
      }
    }
  }
};
