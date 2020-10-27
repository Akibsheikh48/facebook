import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJnW4bO0QoHeq5lx1cfJEF6LLTYtKsJCc",
  authDomain: "facebook-clone-akib.firebaseapp.com",
  databaseURL: "https://facebook-clone-akib.firebaseio.com",
  projectId: "facebook-clone-akib",
  storageBucket: "facebook-clone-akib.appspot.com",
  messagingSenderId: "376707477804",
  appId: "1:376707477804:web:447bdb1704352d15317c89",
  measurementId: "G-S9TV3KKTJS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
