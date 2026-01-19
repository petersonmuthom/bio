// firebase-config.js
// Using Firebase v9 modular (recommended)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJ87n0P3DOd5QsDYfjaGoO0hbaAZr_Mc8",
    authDomain: "bio-37ae0.firebaseapp.com",
    projectId: "bio-37ae0",
    storageBucket: "bio-37ae0.firebasestorage.app",
    messagingSenderId: "72501818145",
    appId: "1:72501818145:web:fc466e47e697b7c31e8460",
    measurementId: "G-CEHP8RNB9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, onAuthStateChanged };