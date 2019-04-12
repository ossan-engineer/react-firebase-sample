import firebase from "firebase/app";
import "firebase/auth";

console.log(process.env);

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "react-firebase-sample-971e2.firebaseapp.com",
  databaseURL: "https://react-firebase-sample-971e2.firebaseio.com",
  projectId: "react-firebase-sample-971e2",
  storageBucket: "react-firebase-sample-971e2.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export default firebase;
