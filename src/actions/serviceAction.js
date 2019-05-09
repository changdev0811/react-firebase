export const getService = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        
        firestore.collection("services").get().then(function(querySnapshot) {
            const services = [];
            querySnapshot.forEach(function(doc) {
                const service = doc.data();
                services.push({
                    id: doc.id,
                    title: service.title,
                    content: service.content,
                    date: service.date
                });
            });
            dispatch({ type: 'GET_SERVICE_SUCCESS', payload: services })
            
        });
    }
}

export const createService = (service) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        
        const newService = {
            title: service.title,
            content: service.content,
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        firestore.collection("services").add(newService)
        .then((docRef) => {
            // console.log(docRef);
            firestore.collection("services").doc(docRef.id).get()
            .then((doc) => {
                // console.log(doc.data());
                const service = {
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    date: doc.data().date
                }
                
                dispatch({ type: 'ADD_SERVICE_SUCCESS', payload: service })
            })
            
        })
        .catch((error) => {
            dispatch({ type: 'ADD_SERVICE_ERROR', payload: error })
        });
    }
}

export const updateService = (service) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        const id = service.id;
        firestore.collection("services").doc(id).set({
            title: service.title,
            content: service.content,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {
            firestore.collection("services").get().then(function(querySnapshot) {
                const services = [];
                querySnapshot.forEach(function(doc) {
                    const service = doc.data();
                    services.push({
                        id: doc.id,
                        title: service.title,
                        content: service.content,
                        date: service.date
                    });
                });   
                dispatch({ type: 'UPDATE_SERVICE_SUCCESS', payload: services })             
            });
        })
        .catch(function(error) {
            dispatch({ type: 'UPDATE_SERVICE_ERROR', payload: error })
        });
    }
}

export const deleteService = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        
        firestore.collection("services").doc(id).delete().then(function() {
            dispatch({ type: 'DELETE_SERVICE_SUCCESS', payload: id })
        }).catch(function(error) {
            dispatch({ type: 'DELETE_SERVICE_ERROR', payload: error })
        });

    }
}