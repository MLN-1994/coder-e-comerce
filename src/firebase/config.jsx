// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Oo6I4goxxIiAxKV5oQnQ3Gz2EXlLUAI",
  authDomain: "rjs-mercadoflaco.firebaseapp.com",
  projectId: "rjs-mercadoflaco",
  storageBucket: "rjs-mercadoflaco.appspot.com",
  messagingSenderId: "651646359616",
  appId: "1:651646359616:web:f2967c914f5caae94067a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
