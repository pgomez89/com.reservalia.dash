import * as ActionTypes from '../constants/ActionTypes';
import {getToday, getOneMonthAgo, sortData} from '../libs/lib';

let defaultState = {
  startDate: {
    value: getOneMonthAgo(),
    name: 'inicio'
  },
  endDate: {
    value: getToday(),
    name: 'fin'
  },
  data: {
    sort: "",
    elemSort: "",
    content: []
  }
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
      return {...state, data: {sort: 'DESC', elemSort: 'sinDisponibilidad', content: action.payload.content}};
    case 'SORT_DATA':
      return {
        ...state,
        data: {
          sort: action.payload.typeSort == 'ASC' ? 'DESC' : 'ASC',
          elemSort: action.payload.key,
          content: sortData(action.payload.content, action.payload.typeSort, action.payload.key)
        }
      };
    default:
      return state;
  }
}
