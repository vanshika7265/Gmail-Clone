// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmjjKlf72nnZDIMmktCe9U6pQWerkcf8Y",
  authDomain: "mailsync-a8a1f.firebaseapp.com",
  projectId: "mailsync-a8a1f",
  storageBucket: "mailsync-a8a1f.firebasestorage.app",
  messagingSenderId: "574040257971",
  appId: "1:574040257971:web:52899b552bbcca8891c7c6",
  measurementId: "G-BYDN4PTT6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();