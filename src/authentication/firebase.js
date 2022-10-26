// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQxA7Vqn9HRwrUUSL5UaZiIEUuCB3__L8",
    authDomain: "dts4a-46-final.firebaseapp.com",
    projectId: "dts4a-46-final",
    storageBucket: "dts4a-46-final.appspot.com",
    messagingSenderId: "389843141094",
    appId: "1:389843141094:web:814bbc23f809ab64c15627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inisialisasi firebase auth
const auth = getAuth(app);

// fungsi registasi dgn email & password
const registEmailPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User yang register adalah", userCredential.user);
    } catch (err) {
        alert(err.code);
    }
};

// fungsi login
const loginEmailPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User yang login adalah", userCredential.user);
    } catch (err) {
        alert(err.code);
    }
};

// Fungsi Logout
const keluarAplikasi = async () => {
    try {
        await signOut(auth);
        alert("Berhasil Logout");
    } catch (err) {
        console.log(err);
    }
};

export {
    auth,
    registEmailPassword,
    loginEmailPassword,
    keluarAplikasi
};