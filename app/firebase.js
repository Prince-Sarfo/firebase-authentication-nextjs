// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH3agx-1Uls-nfs6d5wthyz3HmmYVU_FY",
  authDomain: "nextjs-auth-tutorial-one.firebaseapp.com",
  projectId: "nextjs-auth-tutorial-one",
  storageBucket: "nextjs-auth-tutorial-one.appspot.com",
  messagingSenderId: "101437546687",
  appId: "1:101437546687:web:908e9597e3a5c750a9660a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);