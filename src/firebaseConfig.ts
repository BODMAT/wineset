import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Читання значень з .env
const apiKey: string = import.meta.env.VITE_API_KEY;
const authDomain: string = import.meta.env.VITE_AUTH_DOMAIN;
const projectId: string = import.meta.env.VITE_PROJECT_ID;
const storageBucket: string = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId: string = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId: string = import.meta.env.VITE_APP_ID;
const measurementId: string = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізація Firestore
const db = getFirestore(app);

export { db, collection, getDocs, app };
