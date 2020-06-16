import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGWU1kklWOSRIzexrZhUkfzy6zWS81JlU",
    authDomain: "crwn-db-50fc5.firebaseapp.com",
    databaseURL: "https://crwn-db-50fc5.firebaseio.com",
    projectId: "crwn-db-50fc5",
    storageBucket: "crwn-db-50fc5.appspot.com",
    messagingSenderId: "1006298378485",
    appId: "1:1006298378485:web:f3dac08a007c4110abd5bc",
    measurementId: "G-0NNKPTF48Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;