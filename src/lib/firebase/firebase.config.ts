import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdHJ2cW7DIwbgAyzv9RHiKJjGRvX4qK1g",
  authDomain: "mascots-d7edc.firebaseapp.com",
  projectId: "mascots-d7edc",
  storageBucket: "mascots-d7edc.firebasestorage.app",
  messagingSenderId: "693858102851",
  appId: "1:693858102851:web:cf963716027bd8ba1eaef6",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore e o Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
