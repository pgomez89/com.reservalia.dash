import { CHANGE_FILTER , CHANGE_PAGE_NUMBER, SELECT_SHOW_ROWS,
    LOAD_DATA_ATTEMPTED, LOAD_DATA_SUCCEEDED, LOAD_DATA_FAILED,
    CHANGE_NEXT_PAGE, CHANGE_PREVIOUS_PAGE, SORT_ROWS } from '../constants/ActionTypes';

const initialState = {
    data: [{}],
    isFetching: false,
    headers: ["Id", "Host", "Unavailable", "Total", "%"],
    visibleData: [{}],
    pagination: {
        items: 0,
        itemsPerPage: 10,
        pages: 0,
        actualPage: 1
    },
    filterText: '',
    sort: {
        order: 'desc',
        colSort: 'sinDisponibilidad'
    },
    error: {
        title:'',
        message:''
    }
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
                visibleData: action.payload.visibleData,
                pagination: {
                    items: action.payload.pagination.items,
                    itemsPerPage: action.payload.pagination.itemsPerPage,
                    pages: action.payload.pagination.pages,
                    actualPage: action.payload.pagination.actualPage
                }
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
                pagination: {
                    ...state.pagination,
                    items: action.payload.pagination.items,
                    pages: action.payload.pagination.pages,
                    actualPage: 1
                },
                filterText: action.payload.text
            };
        case CHANGE_PAGE_NUMBER://Seleccionar pagina de la tabla, funciona solamente para la selección del número de página.
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {
                    ...state.pagination,
                    actualPage: action.payload.numberPage
                }
            };
        case CHANGE_NEXT_PAGE://Seleccionar pagina siguiente con las flechas
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {
                    ...state.pagination,
                    actualPage: action.payload.nextPage
                }
            };
        case CHANGE_PREVIOUS_PAGE://Seleccionar pagina anterior con las flechas
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {
                    ...state.pagination,
                    actualPage: action.payload.previousPage
                }
            };
        case SELECT_SHOW_ROWS://Seleccionar cantidad de páginas a mostrar.
            return {
                ...state,
                visibleData: action.payload.visibleData,
                pagination: {
                    ...state.pagination,
                    itemsPerPage: action.payload.cantRows,
                    pages: action.payload.pagination.pages,
                    actualPage: 1
                }
            };
        case SORT_ROWS:
            return {
                ...state,
                data: action.payload.sortData,
                visibleData: action.payload.visibleData,
                pagination: {
                    ...state.pagination,
                    actualPage: 1
                },
                sort: {
                    order: action.payload.sort.order,
                    colSort: action.payload.colSort
                }
            };
        default:
            return state;
    }
}
