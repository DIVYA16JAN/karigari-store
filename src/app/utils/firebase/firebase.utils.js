import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNWXHzJ08orUEnmBm-Fx26Lab9KbwzZHg",
    authDomain: "shopping-store-acafe.firebaseapp.com",
    projectId: "shopping-store-acafe",
    storageBucket: "shopping-store-acafe.appspot.com",
    messagingSenderId: "18745324853",
    appId: "1:18745324853:web:62a9a8358617b503f8c87c",
    measurementId: "G-TZ0XHF8N5T"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;