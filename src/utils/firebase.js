// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc2px8CncrOm2nKvhBdScz6OfYnmN9H0I",
  authDomain: "netflix-gpt-a2260.firebaseapp.com",
  projectId: "netflix-gpt-a2260",
  storageBucket: "netflix-gpt-a2260.appspot.com",
  messagingSenderId: "640797145083",
  appId: "1:640797145083:web:02372fb9b431f6ee3cbd5e",
  measurementId: "G-9M23REBWRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
