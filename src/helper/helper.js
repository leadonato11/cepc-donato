import firebase from 'firebase/firebase-app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCbtSEa1jSa9Iw9o-XR-cmL-2UtGC9cK1U",
    authDomain: "ce-puro-campeon.firebaseapp.com",
    projectId: "ce-puro-campeon",
    storageBucket: "ce-puro-campeon.appspot.com",
    messagingSenderId: "280313342215",
    appId: "1:280313342215:web:0bae3e26836645d5cd3da2",
    measurementId: "G-FW6QL4GL96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

