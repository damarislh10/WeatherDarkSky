// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKzx2UyztFHG5NZ6SfMmnPGFRPjmRugE4",
  authDomain: "darksky-23f32.firebaseapp.com",
  projectId: "darksky-23f32",
  storageBucket: "darksky-23f32.appspot.com",
  messagingSenderId: "839079337175",
  appId: "1:839079337175:web:9c0b333d1870bdb0ea2492",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };
