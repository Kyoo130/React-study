import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvtBfvys0MDDzcj3wdbWfYh5NZyCtngTE",
  authDomain: "react-basic-ae04c.firebaseapp.com",
  projectId: "react-basic-ae04c",
  storageBucket: "react-basic-ae04c.appspot.com",
  messagingSenderId: "825523925326",
  appId: "1:825523925326:web:225227e267f4152d362e1f",
  measurementId: "G-JL3BLM02ZY"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

export const db = getFirestore();