import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-solo-project.firebaseapp.com",
  projectId: "mern-solo-project",
  storageBucket: "mern-solo-project.appspot.com",
  messagingSenderId: "1039566245699",
  appId: "1:1039566245699:web:4055ab9c2fbdb1298ba9f6"
};

export const app = initializeApp(firebaseConfig);