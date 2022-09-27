
//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBS1sJAqK7T3J3EvoP9736lHgG7Rsnx5OM",
    authDomain: "clone-4b926.firebaseapp.com",
    projectId: "clone-4b926",
    storageBucket: "clone-4b926.appspot.com",
    messagingSenderId: "907678554107",
    appId: "1:907678554107:web:1296f0ad3f9d4f03a51d5e"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db= firebaseApp.firestore();
   const auth=firebase.auth();
   export {db,auth};