import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJ07iUx7MGXCP4MvzW1zE5JBGXiXcEMIM",
  authDomain: "mystical-axiom-349317.firebaseapp.com",
  projectId: "mystical-axiom-349317",
  storageBucket: "mystical-axiom-349317.firebasestorage.app",
  messagingSenderId: "700576879816",
  appId: "1:700576879816:web:3f701583d5f636cffe41fd",
  measurementId: "G-SFVSTDPXHK"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
};