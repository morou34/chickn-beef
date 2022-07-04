// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZcc5tajwgviro-Cdp-yiJPBiaHQBbOfc",
  authDomain: "jeu-roulette-chicknbeef.firebaseapp.com",
  projectId: "jeu-roulette-chicknbeef",
  storageBucket: "jeu-roulette-chicknbeef.appspot.com",
  messagingSenderId: "748901969366",
  appId: "1:748901969366:web:a182b644a63e4f6c69c877",
  measurementId: "G-2YSP7X5Y95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app) ;

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);

    })
    .catch((error) => {
        console.log(error);
    })
    

};