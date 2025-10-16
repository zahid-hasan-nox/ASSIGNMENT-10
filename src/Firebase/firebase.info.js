// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3sVDow92-XRQM2e4tqlGQ_M9O55pxC1k",
  authDomain: "assignment-10-207da.firebaseapp.com",
  projectId: "assignment-10-207da",
  storageBucket: "assignment-10-207da.firebasestorage.app",
  messagingSenderId: "480593292259",
  appId: "1:480593292259:web:affab1ab5e60aa0ed78ed6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
