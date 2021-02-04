import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA-eIEgoyS6_XCwlxaSHx9LAvtwrrqRTwY",
    authDomain: "devstore-39403.firebaseapp.com",
    projectId: "devstore-39403",
    storageBucket: "devstore-39403.appspot.com",
    messagingSenderId: "512735912126",
    appId: "1:512735912126:web:4fc8bdd09a52314535beef"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}