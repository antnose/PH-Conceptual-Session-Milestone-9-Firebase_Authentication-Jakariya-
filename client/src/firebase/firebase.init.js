// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5MYeB8mCWb_NsHPDP4wmNQLd4n1X66QI",
  authDomain: "fir-auth-5159d.firebaseapp.com",
  projectId: "fir-auth-5159d",
  storageBucket: "fir-auth-5159d.firebasestorage.app",
  messagingSenderId: "1033911046029",
  appId: "1:1033911046029:web:bf31377f9ea1ad57c577c4",
  measurementId: "G-9KD6MCXY04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
