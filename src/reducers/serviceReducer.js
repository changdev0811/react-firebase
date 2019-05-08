const initState = {
    services: [],
    serviceError: null
}

const serviceReducer = (state = initState, action) => {
    switch(action.type){
        case 'GET_SERVICE_SUCCESS':
            console.log('get service success');
            return {
                services: action.payload
            }
        case 'ADD_SERVICE_SUCCESS':
            console.log('create service success');
            return {
                ...state,
                services: [action.payload, ...state.services]
            }
        case 'ADD_SERVICE_ERROR':
            console.log('create service error');
            return {
                ...state,
                serviceError: action.error
            }
        case 'UPDATE_SERVICE_SUCCESS':
            console.log('update service success');
            return {
                ...state,
                services: [action.payload, ...state.services]
            }
        case 'DELETE_SERVICE_SUCCESS':
            console.log('delete service success');
            return {
                ...state,
                services: state.services.filter(service => service.id !== action.payload)
            }
        case 'DELETE_SERVICE_ERROR':
            console.log('delete service error');
            return {
                ...state,
                serviceError: action.error
            }
        default:
            return state
    }
};

export default serviceReducer;