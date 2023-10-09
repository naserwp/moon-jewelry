// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1DOR5SCIVfSWJjGay0A3GLYWY1doB_0",
  authDomain: "jewelry-dokan.firebaseapp.com",
  projectId: "jewelry-dokan",
  storageBucket: "jewelry-dokan.appspot.com",
  messagingSenderId: "726287219526",
  appId: "1:726287219526:web:7a4d66672cb1e281b00347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;