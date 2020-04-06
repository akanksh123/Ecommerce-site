import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { exportDefaultSpecifier } from '@babel/types';
var firebaseConfig = {
    apiKey: "AIzaSyA59Nd_lelXl_50PQ-Md0UdWFi9cCFyRfA",
    authDomain: "ecommerce-site-b6472.firebaseapp.com",
    databaseURL: "https://ecommerce-site-b6472.firebaseio.com",
    projectId: "ecommerce-site-b6472",
    storageBucket: "ecommerce-site-b6472.appspot.com",
    messagingSenderId: "398793168208",
    appId: "1:398793168208:web:44f8a4ced815ba67050855",
    measurementId: "G-EGVCY2LG2G"
};

export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
