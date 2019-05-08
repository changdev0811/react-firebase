const initState = {
    scores: [],
    scoreError: null
}

const scoreReducer = (state = initState, action) => {
    switch(action.type){
        case 'GET_SCORES_SUCCESS':
            console.log('get scores success');
            return {
                scores: action.payload
            }
        default:
            return state
    }
};

export default scoreReducer;