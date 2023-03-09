import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYFA5AcGHO87WCV70rdkvmEk0fRvsPX18",
  authDomain: "socialmedia-6a09e.firebaseapp.com",
  projectId: "socialmedia-6a09e",
  storageBucket: "socialmedia-6a09e.appspot.com",
  messagingSenderId: "735152795701",
  appId: "1:735152795701:web:10a1dbdf600434e674c17c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
