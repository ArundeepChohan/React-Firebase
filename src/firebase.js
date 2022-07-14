
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD8gp93DkXmxI5jQmSAXC4K9L-44Qhvba0",
    authDomain: "todo-6c183.firebaseapp.com",
    projectId: "todo-6c183",
    storageBucket: "todo-6c183.appspot.com",
    messagingSenderId: "250808790254",
    appId: "1:250808790254:web:cffc2a788528db3b3017ff",
    measurementId: "G-NFC6SPFXMN"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }