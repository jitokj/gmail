import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkVXkmmCb-_orsBftFi3lwZWzZ5mBWGy0",
  authDomain: "fir-39d73.firebaseapp.com",
  projectId: "fir-39d73",
  storageBucket: "fir-39d73.appspot.com",
  messagingSenderId: "671773003631",
  appId: "1:671773003631:web:21c1e23d70546a51f5e29a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
