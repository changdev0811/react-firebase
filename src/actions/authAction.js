export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase  =  getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' }); 
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                status: newUser.status,
                gender: newUser.gender
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const updateProfile = (currentUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        user.updateEmail(
            currentUser.email
        ).then(function(){
            return firestore.collection('users').doc(user.uid).update({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName
            })
        }).then(() => {
            dispatch({ type: 'UPDATE_PROFILE_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'UPDATE_PROFILE_ERROR', err })
        })
    }
}