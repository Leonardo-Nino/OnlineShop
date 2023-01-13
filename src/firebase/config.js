// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpCXzYP-JUoDAYzdoSi8qpY_cOnfxi8I",
  authDomain: "online-shop-bw.firebaseapp.com",
  projectId: "online-shop-bw",
  storageBucket: "online-shop-bw.appspot.com",
  messagingSenderId: "67646542625",
  appId: "1:67646542625:web:924eceab6b85faa406a460"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app