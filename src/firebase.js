// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth , GoogleAuthProvider , } from 'firebase/auth'; 
import { FacebookAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8kRcH84awu0ZqDZyqoQnRNZaf-5VYgYc",
  authDomain: "react-website-3700c.firebaseapp.com",
  databaseURL: "https://react-website-3700c-default-rtdb.firebaseio.com",
  projectId: "react-website-3700c",
  storageBucket: "react-website-3700c.appspot.com",
  messagingSenderId: "1006850255912",
  appId: "1:1006850255912:web:9abc079f860dc88084991d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const providerFb = new FacebookAuthProvider();

