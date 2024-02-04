import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDdameVJFVgg08A4As1hdOeH5Y8bc6tZGI",
  authDomain: "login-form-4afc1.firebaseapp.com",
  projectId: "login-form-4afc1",
  storageBucket: "login-form-4afc1.appspot.com",
  messagingSenderId: "1032230298285",
  appId: "1:1032230298285:web:84de24824f0e9d39209c24"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;