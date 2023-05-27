// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3wXitRcQonEOmO41Ee0ebAyB4DEgviYM",
  authDomain: "realtor-clone-react-f4cc3.firebaseapp.com",
  projectId: "realtor-clone-react-f4cc3",
  storageBucket: "realtor-clone-react-f4cc3.appspot.com",
  messagingSenderId: "518821466607",
  appId: "1:518821466607:web:99b816c7b2b33d538be61a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()