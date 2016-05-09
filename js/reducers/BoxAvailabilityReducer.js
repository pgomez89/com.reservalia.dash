import * as ActionTypes from '../constants/ActionTypes';
import {getToday, getOneMonthAgo,getAvailability} from '../libs/lib';

let defaultState = {
  startDate: {
    value: getToday(),
    name: 'inicio'
  },
  endDate: {
    value: getOneMonthAgo(),
    name: 'fin'
  },
  data:  []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CHARGE_VALUE:
      if (action.name === 'inicio') {
        return {...state, startDate: {value: action.text, name: 'inicio'}};
      } else {
        return {...state, endDate: {value: action.text, name: 'fin'}};
      }
    case ActionTypes.GET_AVAILABILITY:
      return {...state, data: action.payload.content};
    default:
      return state;
  }
}
