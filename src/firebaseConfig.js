// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiU1Eyy6CSnEtFja9UPdZ68Yvw8J1ki8s",
  authDomain: "classicleague-6a087.firebaseapp.com",
  projectId: "classicleague-6a087",
  storageBucket: "classicleague-6a087.firebasestorage.app",
  messagingSenderId: "285835591997",
  appId: "1:285835591997:web:fdc27da05fd9d362d94554"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
