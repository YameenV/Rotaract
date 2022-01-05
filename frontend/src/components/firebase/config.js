import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBo7DCJgc-GhvK2Prayh_GGcV6rRP8kAa8",
    authDomain: "auth0-ebfb6.firebaseapp.com",
    databaseURL: "https://auth0-ebfb6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "auth0-ebfb6",
    storageBucket: "auth0-ebfb6.appspot.com",
    messagingSenderId: "834379261190",
    appId: "1:834379261190:web:fc20ce6da86f31b2312a87",
    measurementId: "G-F4T5D62RN2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
