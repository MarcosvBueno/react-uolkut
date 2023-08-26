import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

export const firebaseConfig = initializeApp( {
  apiKey: "AIzaSyCMAngUOEkS-lP7KVzGqSqRHR1MqiGP5Uw",
  authDomain: "react-auth-jwt.firebaseapp.com",
  projectId: "react-auth-jwt",
  storageBucket: "react-auth-jwt.appspot.com",
  messagingSenderId: "25393816926",
  appId: "1:25393816926:web:d5f313bce6178de875dbcf"
});

// Initialize Firebase
export const auth = getAuth(firebaseConfig);