
// Constants

// export const constants = { };

// Action Creators

// export const actions = { };

// Reducer
export const defaultState = {
    sales:[ {title:"total", metric:"totalSales"},{title:"oneShot", metric:"salesOK"}],
    errors:[{title:"total", metric:"totalCheckoutWithError"},{title:"unknown", metric:"unknown"}],
    total:[{title:"total", metric:"totalAttemps"},{title:"tokens", metric:"tokens"}]
};

export default function(state = defaultState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
