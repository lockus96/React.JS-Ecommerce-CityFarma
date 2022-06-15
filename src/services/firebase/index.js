import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAgd9P1jPqAvVMurqorK0yUtdXb2P88hXg",
  authDomain: "backend-coderhousereactjs.firebaseapp.com",
  projectId: "backend-coderhousereactjs",
  storageBucket: "backend-coderhousereactjs.appspot.com",
  messagingSenderId: "184984781241",
  appId: "1:184984781241:web:7885fac2ddc3c1ecb47668"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);