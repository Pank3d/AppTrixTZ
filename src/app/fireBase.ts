import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjX1ffGUwPk7QbwjBx7qWRgCeEGZ0fmac",
  authDomain: "apptrixtz.firebaseapp.com",
  projectId: "apptrixtz",
  storageBucket: "apptrixtz.appspot.com",
  messagingSenderId: "686478024358",
  appId: "1:686478024358:web:70076b276f90e911909e67",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)