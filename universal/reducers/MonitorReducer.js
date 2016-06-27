const initialState = {
    userNav: 'admin',
    brandNav: 'Monitor Reservalia',
    linkNav: [
        {
            name: 'Dashboard',
            route: '/',
            icon: 'dashboard'
        },
        {
            name: 'Disponibilidad',
            route: '/availability',
            icon: 'table'
        }
    ]
};

export default function monitor(state = initialState, action) {
    switch (action.type){
        default:
            return state;
    }
}