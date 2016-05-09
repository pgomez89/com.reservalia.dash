import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  data: [
    {
      id: "245530",
      host: "www.serenabuzios.com.ar",
      sinDisponibilidad: "364",
      total: "893"
    },
    {
      id: "310438",
      host: "www.altoandinohotel.com",
      sinDisponibilidad: "147",
      total: "246"
    },
    {
      id: "331131",
      host: "www.hotelmonserratba.com",
      sinDisponibilidad: "146",
      total: "514"
    },
    {
      id: "616799",
      host: "www.apartamentosantamarta1.com",
      sinDisponibilidad: "124",
      total: "187"
    }
  ]
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SET_LIST_AVAILABILITY:
          return {...state, data: action.payload.list};
    default:
          return state;
  }
}
