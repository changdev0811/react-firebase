export const getService = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
        firestore.collection("services").get().then(function(querySnapshot) {
            const services = [];
            querySnapshot.forEach(function(doc) {
                const service = doc.data();
                services.push({
                    title: service.title,
                    content: service.content,
                    date: service.date
                });
                // console.log(doc.id, " => ", doc.data());

            });
            dispatch({ type: 'GET_SERVICE_SUCCESS', payload: services })
            
        });
    }
}

export const insertService = (service) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
    }
}

export const updateService = (service) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
    }
}

export const deleteService = (service) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
    }
}