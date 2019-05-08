const initState = {
    services: []
}

const serviceReducer = (state = initState, action) => {
    switch(action.type){
        case 'GET_SERVICE_SUCCESS':
            console.log('get service success');
            return {
                services: action.payload
            }
        
        default:
            return state
    }
};

export default serviceReducer;