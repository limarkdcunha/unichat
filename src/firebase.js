import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAiSDlZXdy3hKUceWAlCKMqKoBXVmr3aAc",
    authDomain: "unichat-5f2ec.firebaseapp.com",
    projectId: "unichat-5f2ec",
    storageBucket: "unichat-5f2ec.appspot.com",
    messagingSenderId: "269081252605",
    appId: "1:269081252605:web:5f7d9a5c463219c13e6494",
  })
  .auth();
