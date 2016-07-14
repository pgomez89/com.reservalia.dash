const initialState = {
    userNav: 'admin',
    brandNav: 'Monitor Reservalia',
    linkNav: [
        {
            name: 'Dashboard',
            route: '/'
        },
        {
            name: 'Disponibilidad',
            route: '/availability'
        }
    ]
};

export default function monitor(state = initialState, action) {
    switch (action.type){
        default:
            return state;
    }
}