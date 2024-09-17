// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-62f8a.firebaseapp.com",
  projectId: "mern-estate-62f8a",
  storageBucket: "mern-estate-62f8a.appspot.com",
  messagingSenderId: "919693714243",
  appId: "1:919693714243:web:cb6e7c3551ec2a25ee85f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
