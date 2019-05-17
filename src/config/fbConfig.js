import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqrySIMY5aWSzLTNbuHkluPeIMIWmRLDU",
  authDomain: "react-firebase-9ec4a.firebaseapp.com",
  databaseURL: "https://react-firebase-9ec4a.firebaseio.com",
  projectId: "react-firebase-9ec4a",
  storageBucket: "react-firebase-9ec4a.appspot.com",
  messagingSenderId: "1028587710969"
};

// client firebase
// var config = {
//   apiKey: "AIzaSyAOqv1VZuXvhlowboaizA5wpV0bL_dUex8",
//   authDomain: "react-firebase-4ca94.firebaseapp.com",
//   databaseURL: "https://react-firebase-4ca94.firebaseio.com",
//   projectId: "react-firebase-4ca94",
//   storageBucket: "react-firebase-4ca94.appspot.com",
//   messagingSenderId: "7080490030"
// };

firebase.initializeApp(config);

export default firebase;
