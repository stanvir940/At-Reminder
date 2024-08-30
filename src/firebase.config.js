// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5zSkLAH2hdQSFHBhX6JMJrOGDWv4l_yM",
  authDomain: "at-reminder-53ef6.firebaseapp.com",
  projectId: "at-reminder-53ef6",
  storageBucket: "at-reminder-53ef6.appspot.com",
  messagingSenderId: "29554321759",
  appId: "1:29554321759:web:2e0abd19740ddb63c9aeea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
