import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqrySIMY5aWSzLTNbuHkluPeIMIWmRLDU",
  authDomain: "react-firebase-9ec4a.firebaseapp.com",
  databaseURL: "https://react-firebase-9ec4a.firebaseio.com",
  projectId: "react-firebase-9ec4a",
  storageBucket: "react-firebase-9ec4a.appspot.com",
  messagingSenderId: "1028587710969"
};

export default firebase.initializeApp(config);
