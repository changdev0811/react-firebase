export const insertScore = (average_score) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
        const newScore = {
            email: user.email,
            average_score: average_score,
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        firestore.collection("scores").add(newScore)
        .then((docRef) => {
            dispatch({ type: 'ADD_SCORE_SUCCESS', payload: newScore })
        })
        .catch((error) => {
            dispatch({ type: 'ADD_SCORE_ERROR', payload: error })
        });
    }
}

export const getScores = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
        firestore.collection("scores").get().then(function(querySnapshot) {
            const scores = [];
            querySnapshot.forEach(function(doc) {
                const score = doc.data();                
                scores.push({
                    average_score: score.average_score,
                    email: score.email
                });
            });
            dispatch({ type: 'GET_SCORES_SUCCESS', payload: scores }) 
        });
    }
}