
// Constants

// export const constants = { };

// Action Creators

// export const actions = { };

// Reducer
export const defaultState = {
    sales: { totalSales: {key:1, title:"Ventas", metric:"totalSales",value:0}, salesOk:{key:2,title:"oneShot", metric:"salesOK",value:0}},
    errors:{ totalErrors: {key:3, title:"Errores", metric:"totalErrors",value:0}, unknownErrors:{key:4, title:"Unknown", metric:"unknown",value:0}},
    total:{  attemps:{key:5  ,title:"Intentos", metric:"totalAttemps",value:0},tokens:{key:6,title:"Tokens", metric:"tokens",value:0}}
};

export default function(state = defaultState, action) {
  switch (action.type) {
      case "LOAD_TOTAL_SALES":
          console.log(action);
          let newState = {...state};
          newState["sales"]["totalSales"].value = action.data;
          return newState;
  default:
    return state;
  }
}
