// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMG810Pi9WqUp485lj_g-k-PVMl8nSczs",
    authDomain: "klinks-7244b.firebaseapp.com",
    projectId: "klinks-7244b",
    storageBucket: "klinks-7244b.appspot.com",
    messagingSenderId: "488317155424",
    appId: "1:488317155424:web:094c9be5c48a08e35eab05",
    measurementId: "G-X8CJEGH8DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }