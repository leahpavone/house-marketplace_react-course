// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh0IYHe2g4X3bh6p06RhSDZPGSdWtKY6U",
  authDomain: "house-marketplace-app-3220e.firebaseapp.com",
  projectId: "house-marketplace-app-3220e",
  storageBucket: "house-marketplace-app-3220e.appspot.com",
  messagingSenderId: "889569140925",
  appId: "1:889569140925:web:7539e6b9916b31b46357d4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
