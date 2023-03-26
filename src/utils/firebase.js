// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBycYE89aALH-cuRs6sFb4wCiKYjSAJL44",
  authDomain: "the-news-desk-7b9cd.firebaseapp.com",
  projectId: "the-news-desk-7b9cd",
  storageBucket: "the-news-desk-7b9cd.appspot.com",
  messagingSenderId: "361345046154",
  appId: "1:361345046154:web:6b4e02d53dcb5dee72ff73",
  measurementId: "G-Q6NXRNHMK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const signUpHandler = (userData) => {
  const { enteredEmail, enteredPassword, enteredFirstName, enteredLastName } =
    userData;

  createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userData);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const signInHandler = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
