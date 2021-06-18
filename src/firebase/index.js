import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCbtSEa1jSa9Iw9o-XR-cmL-2UtGC9cK1U",
    authDomain: "ce-puro-campeon.firebaseapp.com",
    projectId: "ce-puro-campeon",
    storageBucket: "gs://ce-puro-campeon.appspot.com",
    messagingSenderId: "280313342215",
    appId: "1:280313342215:web:0bae3e26836645d5cd3da2",
    databaseURL: "https://ce-puro-campeon.firebaseio.com",
})


export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}

export function getFromStorage(URL){
    const storage = app.storage()
    return storage.refFromURL(URL).getDownloadURL()
}