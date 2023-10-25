// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKfn77ev74Xrmie9FJGRvw31_HosL3eMY",
  authDomain: "drive-clone-37cf4.firebaseapp.com",
  projectId: "drive-clone-37cf4",
  storageBucket: "drive-clone-37cf4.appspot.com",
  messagingSenderId: "700391398202",
  appId: "1:700391398202:web:4491641fccc938e8ea8e03",
  measurementId: "G-7CH1DGL7RK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
