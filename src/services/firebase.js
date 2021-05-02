import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB91h3wKO9RKjt6cDQja1dUTZ8HUePiWzg",
  authDomain: "jass-supercar-rental.firebaseapp.com",
  projectId: "jass-supercar-rental",
  storageBucket: "jass-supercar-rental.appspot.com",
  messagingSenderId: "866793636452",
  appId: "1:866793636452:web:05bf57b36b018165689571",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

function login() {
  auth.signInWithPopup(provider);
}
function logout() {
  auth.signOut();
}

export { auth, login, logout };
