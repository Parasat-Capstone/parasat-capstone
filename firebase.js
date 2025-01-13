import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOaqIBtW8XW-0hyqaVHX6xaWsoWZlCc_8",
  authDomain: "parasat-capstone.firebaseapp.com",
  projectId: "parasat-capstone",
  storageBucket: "parasat-capstone.firebasestorage.app",
  messagingSenderId: "601975530130",
  appId: "1:601975530130:web:e9e05eead6a122832cbc4b",
  measurementId: "G-GYFYKHW2EW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
