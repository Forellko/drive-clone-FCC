// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA090yU8-rXisWcyS6w-zlgfM8momf2bTQ",
  authDomain: "drive-clone-9f3de.firebaseapp.com",
  projectId: "drive-clone-9f3de",
  storageBucket: "drive-clone-9f3de.appspot.com",
  messagingSenderId: "885770080976",
  appId: "1:885770080976:web:7eb5143dd1d800853544d5",
  measurementId: "G-PGTYSE5VDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const storage = getStorage(app);
export const database = getFirestore(app);
