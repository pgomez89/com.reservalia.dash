import { CHANGE_FILTER , CHANGE_PAGE_NUMBER, SELECT_SHOW_ROWS,
    LOAD_DATA_ATTEMPTED, LOAD_DATA_SUCCEEDED, LOAD_DATA_FAILED,
    CHANGE_NEXT_PAGE, CHANGE_PREVIOUS_PAGE } from '../constants/ActionTypes';

const initialState = {
    data: [{}],
    isFetching: false,
    visibleData: [{}],
    pagination: {
        items: 0,
        itemsPerPage: 10,
        pages: 0,
        actualPage: 1
    },
    filtro: ''
};

export default function availability(state = initialState, action) {
    switch (action.type) {
        case LOAD_DATA_ATTEMPTED://Esperar que se resuelva la promise.
            return {
                ...state,
                isFetching: true
            };
        case LOAD_DATA_SUCCEEDED://Resolver promise exitosamente, setear valores necesario
            return {
                ...state,
                data: action.payload.data,
                isFetching: false,
                visibleData: getVisibleData(action.payload.data, state.filtro, state.pagination.actualPage, state.pagination.itemsPerPage),
                pagination: {...state.pagination, items: action.payload.items, pages: action.payload.pages}
            };
        case LOAD_DATA_FAILED://Fallar promise, mostrar error
            return {
                ...state,
                data: [{id: 5555, error: action.error}],
                isFetching: false
            };
        case CHANGE_FILTER://Cargar filtro, filtra por Id y host.
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {...state.pagination, pages: action.payload.pages, actualPage: 1},
                filtro: action.payload.text
            };
        case CHANGE_PAGE_NUMBER://Seleccionar pagina de la tabla, funciona solamente para la selección del número de página.
            return {
                ...state,
                visibleData: getVisibleData(state.data, state.filtro, action.numberPage, state.pagination.itemsPerPage),
                pagination: {...state.pagination, actualPage: action.numberPage}
            };
        case CHANGE_NEXT_PAGE:
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {...state.pagination, actualPage: action.payload.nextPage}
            };
        case CHANGE_PREVIOUS_PAGE:
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {...state.pagination, actualPage: action.payload.previousPage}
            };
        case SELECT_SHOW_ROWS://Seleccionar cantidad de páginas a mostrar.
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {
                    ...state.pagination,
                    itemsPerPage: action.payload.cantRows,
                    pages: action.payload.pages,
                    actualPage: action.payload.actualPage
                }
            };
        default:
            return state;
    }
}

const getVisibleData = (data, filter, actualPage, itemsPerPage) => {
    filter = filter.toLowerCase();

    var result = data.filter(obj => {
        return obj.id.includes(filter) || obj.host.includes(filter) ? true : false;
    }).slice(itemsPerPage * (actualPage - 1), itemsPerPage + (itemsPerPage * (actualPage - 1)));

    return result.length ? result : [{result: 'No matching records found'}];
};

const getCantPages = (cantRows, itemsPerPage) => {
    return Math.ceil(cantRows / itemsPerPage);
};
