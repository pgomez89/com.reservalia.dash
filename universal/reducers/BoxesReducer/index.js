// Constants

// export const constants = { };

// Action Creators

// export const actions = { };

// Reducer
export const defaultState = {
    sales: {
        totalSales: {key: "totalSales", title: "Ventas", metric: "totalSales", value: 0},
        salesOK: {key: "salesOK", title: "One Shot", metric: "salesOK", value: 0}
    },
    errors: {
        totalErrors: {key: "totalErrors", title: "Errores", metric: "totalErrors", value: 0},
        unknownErrors: {key: "unknownErrors", title: "Unknown", metric: "unknown", value: 0}
    },
    total: {
        attemps: {key: "attemps", title: "Intentos", metric: "totalAttemps", value: 0},
        tokens: {key: "tokens", title: "Tokens", metric: "tokens", value: 0}
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

            newState["sales"][action.data.metric] = {key: action.data.metric , title: action.data.metric, metric: action.data.metric, value:action.data.value};
            return newState;

        case "LOAD_TOTAL_ERRORS":
        case "LOAD_UNKNOWN_ERRORS":
            newState["errors"][action.data.metric].value = action.data.value;
            return newState;

        case "LOAD_ERRORS_WITH_BOOKING_STATUS":
            newState["errors"][action.data.metric] = {key: action.data.metric , title: action.data.metric, metric: action.data.metric, value:action.data.value};
            return newState;

        case "LOAD_TOTAL_ATTEMPS":
        case "LOAD_TOTAL_TOKENS":
            newState["total"][action.data.metric].value = action.data.value;
            return newState;

        default:
            return state;
    }
}
