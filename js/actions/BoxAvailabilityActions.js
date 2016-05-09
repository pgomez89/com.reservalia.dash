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
    return {
      type: GET_AVAILABILITY,
      payload: {
        content
      }
    }
  }
};
