// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-3b1dd.firebaseapp.com",
  projectId: "taskmanager-3b1dd",
  storageBucket: "taskmanager-3b1dd.appspot.com",
  messagingSenderId: "529538372145",
  appId: "1:529538372145:web:fe06989e583969f2ebfb10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);