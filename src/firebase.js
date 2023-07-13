// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
/// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmw-GfVSu-HwdT3Uu0j8C7QdMkx2C9GQ",
  authDomain: "chat-37fee.firebaseapp.com",
  projectId: "chat-37fee",
  storageBucket: "chat-37fee.appspot.com",
  messagingSenderId: "415215931397",
  appId: "1:415215931397:web:f7fa3429757f9d53af0c6c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore();