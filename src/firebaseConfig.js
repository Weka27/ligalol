import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiU1Eyy6CSnEtFja9UPdZ68Yvw8J1ki8s",
  authDomain: "classicleague-6a087.firebaseapp.com",
  projectId: "classicleague-6a087",
  storageBucket: "classicleague-6a087.firebasestorage.app",
  messagingSenderId: "285835591997",
  appId: "1:285835591997:web:fdc27da05fd9d362d94554",
  measurementId: "G-TEBF55MGF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
