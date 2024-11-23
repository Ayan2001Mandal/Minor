// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "minorproject-mca.firebaseapp.com",
    projectId: "minorproject-mca",
    storageBucket: "minorproject-mca.firebasestorage.app",
    messagingSenderId: "370503839471",
    appId: "1:370503839471:web:69f0046f4ccebe4123751a",
    measurementId: "G-M40WSG3GCF",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
