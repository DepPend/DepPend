import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDbCPUpq0jRfLRLsPOj8FKsLzX2Yu8j810",
  authDomain: "departemenpendidikan-7d422.firebaseapp.com",
  databaseURL: "https://departemenpendidikan-7d422-default-rtdb.firebaseio.com",
  projectId: "departemenpendidikan-7d422",
  storageBucket: "departemenpendidikan-7d422.appspot.com", // ✅ HARUS .appspot.com
  messagingSenderId: "173181432710",
  appId: "1:173181432710:web:495eac5b3437bf74ef7207",
  measurementId: "G-YHKW7VVF3X"
};

// ✅ Cek apakah Firebase sudah diinisialisasi
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
