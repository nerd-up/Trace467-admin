import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase configuration object from your Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDhb0AKr4RfC2pGHZ7JWtUDLhXY1aagkHw",
    authDomain: "trace467-d4f13.web.app",
    projectId: "trace467-d4f13",
    storageBucket: "gs://trace467-d4f13.appspot.com",
    messagingSenderId: "739431608336",
    appId: "trace467-d4f13"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
export { firestore };
