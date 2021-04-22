import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB0aJhp2nTlAAzTuarUTN87QLIFhI54d90",
    authDomain: "remember-2bafc.firebaseapp.com",
    databaseURL:"https://remember-2bafc.firebaseio.com",
    projectId: "remember-2bafc",
    storageBucket: "remember-2bafc.appspot.com",
    messagingSenderId: "356697190669",
    appId: "1:356697190669:web:dcec5f682323016fa90044",
    measurementId:""
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore() 