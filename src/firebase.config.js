// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUgLCAhUbzo-72jTSTblPLrXzBz0Byw70",
  authDomain: "navnath-traders.firebaseapp.com",
  projectId: "navnath-traders",
  storageBucket: "navnath-traders.appspot.com",
  messagingSenderId: "654257735053",
  appId: "1:654257735053:web:f9393feac5fe1bad4729c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
