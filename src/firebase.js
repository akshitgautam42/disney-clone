import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAo-znr91gHlZIwK2zyOk9AYIBjDe_xscg",
    authDomain: "disney-clone-d8363.firebaseapp.com",
    projectId: "disney-clone-d8363",
    storageBucket: "disney-clone-d8363.appspot.com",
    messagingSenderId: "608767413730",
    appId: "1:608767413730:web:396293e20fad499947bdbb",
    measurementId: "G-F4B5J55PZX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;