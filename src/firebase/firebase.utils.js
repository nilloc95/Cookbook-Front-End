import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDwnyor6IBqgv6BCy370wKoIvSmr-YLi1E",
  authDomain: "cookbook-6c240.firebaseapp.com",
  databaseURL: "https://cookbook-6c240.firebaseio.com",
  projectId: "cookbook-6c240",
  storageBucket: "cookbook-6c240.appspot.com",
  messagingSenderId: "208562202545",
  appId: "1:208562202545:web:4d6d72e0febe2a2d177f90",
  measurementId: "G-PVPTE7D9P6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
