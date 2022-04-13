// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAegNsp9OMt0uALw23Ubqqz_Kb6v9uq7vc",
    authDomain: "applestore-react-js.firebaseapp.com",
    projectId: "applestore-react-js",
    storageBucket: "applestore-react-js.appspot.com",
    messagingSenderId: "755883586647",
    appId: "1:755883586647:web:e4555e89293c012fb59f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db