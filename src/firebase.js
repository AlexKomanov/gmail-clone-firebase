import firebase from "firebase/compat/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXpyKe2-M_AFrnVeue2QMh1YDNMHcmpfY",
    authDomain: "clone-redux-1e02e.firebaseapp.com",
    projectId: "clone-redux-1e02e",
    storageBucket: "clone-redux-1e02e.appspot.com",
    messagingSenderId: "685948096824",
    appId: "1:685948096824:web:10479a7d819cbc61f271cd",
    measurementId: "G-5QHTRLH7XQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider};