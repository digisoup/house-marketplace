import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDQ1L-tv9NQXWv8mZUb5Yf3x-e-KLzVERo",
  authDomain: "house-marketplace-app-18761.firebaseapp.com",
  projectId: "house-marketplace-app-18761",
  storageBucket: "house-marketplace-app-18761.appspot.com",
  messagingSenderId: "786608673047",
  appId: "1:786608673047:web:06e9365b47e770b9206752",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
