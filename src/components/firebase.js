import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8Y9VQCyTR2LNRRJLbjYKgGGJh-WYpiWo",
    authDomain: "eitse--clone.firebaseapp.com",
    projectId: "eitse--clone",
    storageBucket: "eitse--clone.appspot.com",
    messagingSenderId: "468954417135",
    appId: "1:468954417135:web:6edd910426487811f6981a",
    measurementId: "G-EXVY58CP9E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }