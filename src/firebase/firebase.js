import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
{
    apiKey: "AIzaSyByvKsP6KysYLbIAFw_ZDxfKyaXpkuEoFg",
    authDomain: "fotosintesis-coderhouse.firebaseapp.com",
    projectId: "fotosintesis-coderhouse",
    storageBucket: "fotosintesis-coderhouse.appspot.com",
    messagingSenderId: "232138352556",
    appId: "1:232138352556:web:4f8067c8b66f32c6fabc09"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}