/**
 * src/firebase.js
 */
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  //your config
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
