import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJyG6uZwY8NW1cmLathQvjay5CLiqdUQk",
  authDomain: "ecommerce-website-a1d60.firebaseapp.com",
  databaseURL: "https://ecommerce-website-a1d60-default-rtdb.firebaseio.com",
  projectId: "ecommerce-website-a1d60",
  storageBucket: "ecommerce-website-a1d60.appspot.com",
  messagingSenderId: "798457109050",
  appId: "1:798457109050:web:c5e5d3c0b9dc9d56e77303",
  measurementId: "G-BDCNGSMMZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
