// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr4BzYuOVrivkcmNzr0288M8F4PoleJMI",
  authDomain: "auth-ac249.firebaseapp.com",
  projectId: "auth-ac249",
  storageBucket: "auth-ac249.appspot.com",
  messagingSenderId: "249301887439",
  appId: "1:249301887439:web:e3081899d19812dfea0aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);