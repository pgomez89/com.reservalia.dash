// Constants

// export const constants = { };

// Action Creators

// export const actions = { };

// Reducer
export const defaultState = {
    sales: {
        totalSales: {key: 1, title: "Ventas", metric: "totalSales", value: 0},
        salesOK: {key: 2, title: "One Shot", metric: "salesOK", value: 0}
    },
    errors: {
        totalErrors: {key: 3, title: "Errores", metric: "totalErrors", value: 0},
        unknownErrors: {key: 4, title: "Unknown", metric: "unknown", value: 0}
    },
    total: {
        attemps: {key: 5, title: "Intentos", metric: "totalAttemps", value: 0},
        tokens: {key: 6, title: "Tokens", metric: "tokens", value: 0}
    }
};

export default function (state = defaultState, action) {
    let newState = {...state};
    switch (action.type) {
        case "LOAD_TOTAL_SALES":
        case "LOAD_SALES_OK":
            newState["sales"][action.data.metric].value = action.data.value;
            return newState;
        case "LOAD_SALES_WITH_BOOKING_STATUS":

            newState["sales"][action.data.metric] = {key: newState["sales"].length+1 , title: action.data.metric, metric: action.data.metric, value:action.data.value};
            return newState;
        default:
            return state;
    }
}
