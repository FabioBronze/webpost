import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8nLA8Iw_YB4MLalupHeDKVKQCvuRjxU0",
  authDomain: "social-media-1effc.firebaseapp.com",
  projectId: "social-media-1effc",
  storageBucket: "social-media-1effc.appspot.com",
  messagingSenderId: "226875517401",
  appId: "1:226875517401:web:53ad77b696cbaf6974d1c8",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
