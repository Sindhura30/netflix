// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr5EBDxAGgtBnteT-LRGC6jjTMAVdeRGM",
  authDomain: "netflix-dd6aa.firebaseapp.com",
  projectId: "netflix-dd6aa",
  storageBucket: "netflix-dd6aa.firebasestorage.app",
  messagingSenderId: "656663044202",
  appId: "1:656663044202:web:a9052ce1f24782a3a62a13",
  measurementId: "G-LW16BGPJ6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };