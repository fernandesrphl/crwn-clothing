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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;