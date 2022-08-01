// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV4ZqoArbblMe5fHltdCIjv9nAPbQqyrM",
  authDomain: "my-app-5aaea.firebaseapp.com",
  projectId: "my-app-5aaea",
  storageBucket: "my-app-5aaea.appspot.com",
  messagingSenderId: "769566549986",
  appId: "1:769566549986:web:2ce3827c43dc7c9ae07bbb",
  measurementId: "G-9HV6JXT8HS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
