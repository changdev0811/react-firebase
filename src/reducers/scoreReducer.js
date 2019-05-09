const initState = {
    scores: [],
    average_score: '',
    scoreError: null
}

const scoreReducer = (state = initState, action) => {
    switch(action.type){
        case 'GET_SCORES_SUCCESS':
            console.log('get scores success');
            return {
                scores: action.payload
            }
        case 'ADD_SCORE_SUCCESS':
            console.log('add scores success');
            return {
                average_score: action.payload
            }
        case 'ADD_SCORE_ERROR':
            console.log('add scores error');
            return {
                scoreError: action.error
            }
        default:
            return state
    }
};

export default scoreReducer;