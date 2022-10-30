import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAAZFXZnHJlaZZ1dG5P2VbzxaE3juCFKEw",
  authDomain: "nextbase-b566b.firebaseapp.com",
  projectId: "nextbase-b566b",
  storageBucket: "nextbase-b566b.appspot.com",
  messagingSenderId: "780336857077",
  appId: "1:780336857077:web:ebdd23e9e689efde96aabc",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();