export const insertScore = (scores) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
        firestore.collection('scores').doc(user.uid).set({
            question_id: scores.id,
            score: scores.score
        })
    }
}