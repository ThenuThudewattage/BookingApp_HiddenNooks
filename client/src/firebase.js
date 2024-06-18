// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-solo-project.firebaseapp.com",
  projectId: "mern-solo-project",
  storageBucket: "mern-solo-project.appspot.com",
  messagingSenderId: "1039566245699",
  appId: "1:1039566245699:web:4055ab9c2fbdb1298ba9f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);