import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAwY4wlwD4cQpB6WhN0v_GwGsiQaI0jW-Q",
    authDomain: "beast-engine.firebaseapp.com",
    projectId: "beast-engine",
    storageBucket: "beast-engine.appspot.com",
    messagingSenderId: "36729925654",
    appId: "1:36729925654:web:6c0961335b4b626950c537"
};


const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);